require('dotenv').config();
const request = require('request');

const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;

const Users = SynapsePay.Users;
const Nodes = SynapsePay.Nodes;
const Transactions = SynapsePay.Transactions;

const client = new Clients(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

// CREATE A USER
let createUser = (
  email,
  password,
  phoneNumbers,
  legalName,
  note,
  supID,
  cb
) => {
  let createPayload = {
    logins: [
      {
        email,
        password,
        read_only: false
      }
    ],
    phone_numbers: [phoneNumbers],
    legal_names: [legalName],
    extra: {
      note,
      supp_id: supID,
      is_business: false
    }
  };
  Users.create(
    client,
    process.env.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    (err, userRes) => {
      if (err) {
        cb(err);
      } else {
        cb(null, userRes);
      }
    }
  );
};

// GET DETAILS ON USER.
let getUser = (user_id, cb) => {
  let options = {
    ip_address: Helpers.getUserIP(),
    fingerprint: 'null',
    _id: user_id
  };
  Users.get(client, options, (err, userInfo) => {
    if (err) {
      cb(err);
    } else {
      cb(null, userInfo);
    }
  });
};

// GET DETAILS ON ALL USERS
let getAllUser = cb => {
  let options = {
    ip_address: Helpers.getUserIP(),
    page: '', //optional
    per_page: '', //optional
    query: '' //optional
  };
  Users.get(client, options, (err, allUsers) => {
    if (err) {
      cb(err);
    } else {
      cb(null, allUsers);
    }
  });
};

// FUNCTION TO REQUEST MFA IN ORDER TO GET THE OAUTH KEY. THIS STEP IS REQUIRED IN ORDER TO MAKE ANY TRANSACTIONS
let getOauthkeyMFA = (userInfo, step, phoneNumbers, pin, cb) => {
  let url = `https://uat-api.synapsefi.com/v3.1/oauth/${userInfo.userLink.json._id}`;
  let headers = {
    'X-SP-GATEWAY': `${process.env.CLIENT_ID}|${process.env.CLIENT_SECRET}`,
    'X-SP-USER-IP': '73.162.88.117',
    'X-SP-USER': `|${process.env.CLIENT_ID}`,
    'Content-Type': 'application/json'
  };
  let form = {
    refresh_token: userInfo.refreshToken
  };
  if (step === 'validateMFA') {
    form['phone_number'] = phoneNumbers;
  } else if (step === 'inputPin') {
    form['validation_pin'] = pin;
  }
  let formData = JSON.stringify(form);
  request.post(
    {
      url,
      body: formData,
      headers
    },
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        var data = {
          oAuthData: res.body,
          ip_address: headers['X-SP-USER-IP'],
          links: userInfo.userLink
        };
        cb(null, data);
      }
    }
  );
};

// VIEW ALL NODES FOR A SPECIFIC USER
let getAllUsersNodes = (user, cb) => {
  let userInfo = {
    client: user.links.client.client_id,
    ip_address: user.ip_address,
    fingerprint: user.links.fingerprint,
    oauth_key: JSON.parse(user.oAuthData).oauth_key,
    json: user.links.json
  };

  Nodes.get(userInfo, null, (err, nodesRes) => {
    if (err) {
      cb(err);
    } else {
      cb(null, nodesRes);
    }
  });
};

// GET TRANSACTIONS/ STATUSES FOR ALL SPECIFIC USER
let getAllTrans = (eachNode, cb) => {
  let node = {
    user_id: eachNode.links.json.client.id,
    fingerprint: eachNode.links.fingerprint,
    ip_address: eachNode.links.ip_address,
    oauth_key: JSON.parse(eachNode.oAuthData).oauth_key
  };

  let options = {
    url: `https://uat-api.synapsefi.com/v3.1/users/${node.user_id}/trans`,
    headers: {
      'X-SP-GATEWAY': `${process.env.CLIENT_ID}|${process.env.CLIENT_SECRET}`,
      'X-SP-USER-IP': '73.162.88.117',
      'X-SP-USER': `${node.oauth_key}|${node.user_id}`,
      'Content-Type': 'application/json'
    }
  };
  request(options, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.body);
    }
  });
};

module.exports = {
  getUser,
  getAllUser,
  getOauthkeyMFA,
  getAllUsersNodes,
  getAllTrans
};
