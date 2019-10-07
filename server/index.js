const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const synapse = require('./synapseAPI.js');
const dataArr = require('./data.js');

app.use(express.static('public/dist'));

app.use(bodyParser.json());

app.post('/transfer', (req, res) => {
  console.log(req.body, 'this is the body');
  res.sendStatus(202);
});

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

app.get('/getUsers/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
      res.statusCode = 200;
      res.send(data);
    }
  });
});

app.post('/getvalidationPIN/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  let phoneNumber = req.body.phone_number;
  let userInfo = {};
  synapse.getUser(user_id, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send(err);
    } else {
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
            if (JSON.parse(data.oAuthData).oauth_key) {
              res.statusCode = 202;
              res.send('MFA not neccessary. Device already validated');
            }
          }
        }
      );
    }
  });
});

app.post('/getoAuthKey', (req, res) => {
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
      synapse.getOauthkeyMFA(
        userInfo,
        'inputPin',
        null,
        pin,
        (err, data) => {
          if (err) {
            res.statusCode = 404;
            res.send(err);
          } else {
            if (JSON.parse(data.oAuthData).oauth_key) {
              res.statusCode = 202;
              res.send('Device already validated')
            } else {
              res.statusCode = 202;
              res.send('Device successfully validated')
            }
          }
        }
      );
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
