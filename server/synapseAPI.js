require('dotenv').config();
const request = require('request')

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
    _id: '5d8a9ef714c7fa73f35c3c58',
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

let getOauthkey = (userId) => {

  let option = {
    url: `https://uat-api.synapsefi.com/v3.1/oauth/${userId}`,
    headers: {
      'X-SP-GATEWAY': `${process.env.CLIENT_ID}|${process.env.CLIENT_SECRET}`,
      'X-SP-USER-IP':'73.162.88.117',
      'X-SP-USER': `|${process.env.CLIENT_ID}`,
      'Content-Type':'application/json'
    }
  };

  request(option, () => {
    
  })



}





var getData = () => {
  getUser((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.json.refresh_token, 'data from get user');
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
