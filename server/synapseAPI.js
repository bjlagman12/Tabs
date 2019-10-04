require('dotenv').config();

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
    _id: '5d8a9ef714c7fa73f35c3c58',
    fingerprint: 'null',
    ip_address: Helpers.getUserIP(),
    full_dehydrate: 'yes' //optional
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


let getAllNodes = () => {
  Nodes.get(
    user,
    {
      _id: NODE_ID,
      full_dehydrate: 'yes' //optional
    },
    function(err, nodeResponse) {
      console.log(nodeResponse, 'node shit')
      // error or node object
      // node = nodeResponse;
    }
  );
  
}

