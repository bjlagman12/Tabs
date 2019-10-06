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

// // Create a user
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
        console.log(err);
        cb(err);
      } else {
        console.log(userRes);
        cb(null, userRes);
      }
    }
  );
};

// Get User
let getUser = cb => {
  let options = {
    ip_address: Helpers.getUserIP(),
    fingerprint: 'null',
    _id: '5d8a9ef714c7fa73f35c3c58'
  };
  Users.get(client, options, (err, userInfo) => {
    if (err) {
      cb(err);
    } else {
      cb(null, userInfo);
    }
  });
};

// Get all users
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
      console.log(allUsers);
      cb(null, allUsers);
    }
  });
};

let getAllNodes = (user, cb) => {
  Nodes.get(user, null, (err, nodeRes) => {
    if (err) {
      cb(err);
    } else {
      console.log(nodeRes);
      cb(null, nodeRes);
    }
  });
};

let getOauthkeyMFA = (userInfo, step, phoneNumbers, pin) => {
  let url = `https://uat-api.synapsefi.com/v3.1/oauth/${userInfo.id}`;
  let headers = {
    'X-SP-GATEWAY': `${process.env.CLIENT_ID}|${process.env.CLIENT_SECRET}`,
    'X-SP-USER-IP': '73.162.88.117',
    'X-SP-USER': `|${process.env.CLIENT_ID}`,
    'Content-Type': 'application/json'
  };
  let form = {
    refresh_token: userInfo.refreshToken,
  };

  if (step === 'validateMFA') {
    form['phone_number'] = phoneNumbers
  } else if (step === 'inputPin') {
    form['validation_pin'] = pin
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
        console.log(err, 'error');
      } else {
        console.log(res.body, 'res');
      }
    }
  );
};


var getData = () => {
  let userInfo = {};
  getUser((err, data) => {
    if (err) {
      console.log(err);
    } else {
      userInfo['id'] = data.json._id;
      userInfo['refreshToken'] = data.json.refresh_token;
      getOauthkeyMFA(userInfo, 'validateMFA', '9254818470');
      // console.log(userInfo, 'data from get user');
      // getAllNodes(data, (err, nodeRes) => {
      //   if (err) {
      //     console.log(err, 'err');
      //   } else {
      //     console.log(nodeRes, 'success');
      //   }
      // });
    }
  });
};

getData();
