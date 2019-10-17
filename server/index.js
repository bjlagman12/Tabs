const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const synapse = require('./synapseAPI.js');

app.use(express.static('public/dist'));

app.use(bodyParser.json());

// GET ALL USERS
app.get('/allUsers', (req, res) => {
  synapse.getAllUser((err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      res.statusCode = 200;
      res.send(data.users);
    }
  });
});

// GET DETAILS ON A SPECIFIC USER
app.get('/getUsers/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      res.statusCode = 200;
      console.log(data, 'data from getUsers')
      res.send(data);
    }
  });
});

// NEED TO CREATE MFA ON A USER BEFORE PEFORMING ANY TRANSACTIONS
app.post('/getvalidationPIN/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  let phoneNumber = req.body.phone_number;
  let userInfo = {};
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      // console.log(data)
      userInfo['refreshToken'] = data.json.refresh_token;
      userInfo['userLink'] = data;
      synapse.getOauthkeyMFA(
        userInfo,
        'validataMFA',
        phoneNumber,
        null,
        (err, data) => {
          if (err) {
            res.statusCode = 404;
            res.send(err);
          } else {
            console.log(data, 'data');
            if (JSON.parse(data.oAuthData).oauth_key) {
              res.statusCode = 202;
              res.send('MFA not neccessary. Device already validated');
            } else {
              res.statusCode = 202;
              res.send('Set up MFA');
            }
          }
        }
      );
    }
  });
});

// AFTER YOU RECEIVED THE MFA CODE THIS IS GRANT ACCESS TO OAUTH KEY
app.post('/getoAuthKey/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  let pin = req.body.pin;
  let userInfo = {};
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      userInfo['refreshToken'] = data.json.refresh_token;
      userInfo['userLink'] = data;
      synapse.getOauthkeyMFA(userInfo, 'inputPin', null, pin, (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.send(err);
        } else {
          if (JSON.parse(data.oAuthData).oauth_key) {
            res.statusCode = 202;
            res.send(
              `${JSON.parse(data.oAuthData).oauth_key} already activated`
            );
          } else {
            res.statusCode = 202;
            res.send('Device successfully validated');
          }
        }
      });
    }
  });
});

// VIEW BALANCE FOR A USER **HARD CODED TO VIEW ONE USER
app.get('/viewBalance/:user_id', (req, res) => {
  let userInfo = {};
  let user_id = req.params.user_id;
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      userInfo['refreshToken'] = data.json.refresh_token;
      userInfo['userLink'] = data;
      synapse.getOauthkeyMFA(userInfo, null, null, null, (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.send(err);
        } else {
          synapse.getAllUsersNodes(data, (err, data) => {
            if (err) {
              res.statusCode = 404;
              res.send(err);
            } else {
              res.statusCode = 200;
              let allData = [];
              for (var i = 0; i < data.nodes.length; i++) {
                var eachData = {};
                eachData['id'] = data.nodes[i]._id;
                eachData['allowed'] = data.nodes[i].allowed;
                eachData['acctNum'] = data.nodes[i].info.account_num;
                eachData['bank'] = data.nodes[i].info.bank_name;
                eachData['balance'] = data.nodes[i].info.balance;
                allData.push(eachData);
              }
              res.send(allData);
            }
          });
        }
      });
    }
  });
});

// VIEW ALL TRANSACTIONS AND STATUSES FOR A USER
// ** ERROR DURING REQUEST INVALID/EXPIRED OAUTH_KEY. COULD FIND BUG AFTER DUGGING FOR SEVERAL HOURS
// ** POSTMAN REQUEST WORKED SUCCESSFULLY HOWEVER NODE LIBRARY HAD ISSUES OPT OUT CREATING MY OWN REQUEST
app.get('/viewTransactions/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  let userInfo = {};
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      userInfo['refreshToken'] = data.json.refresh_token;
      userInfo['userLink'] = data;
      synapse.getOauthkeyMFA(userInfo, null, null, null, (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.send(err);
        } else {
          synapse.getAllTrans(data, (err, data) => {
            if (err) {
              res.statusCode = 404;
              res.send(err);
            } else {
              res.statusCode = 202;
              res.send(data)
            }
          });
        }
      });
    }
  });
});

// MAKE A PAYMENT TO A USER ** ROUTE NOT COMPLETE
app.get('/makeTrans', (req, res) => {
  // DEPENDING WHERE/HOW I SAVE MY INFO
  // I CAN PASS IN MY INFO DIRECTLY IN THIS THE MAKE TRANSACTION FUNCTION
  synapse.makeTrans((err, data) => {
    if (err) {
      res.statusCode = 404
    } else {
      res.statusCode = 202
    }
  })

})

app.listen(port, () => console.log(`Listening on port ${port}`));
