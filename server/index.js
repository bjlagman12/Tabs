const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(express.static('public/dist'));

app.use(bodyParser.json());

/*
SYNAPSE API ISSUE
---------------------
SUCCESSFULLY SET UP KYC/CIP FOR USERS
HAD ISSUE TRANSFERRING FUNDS WITHIN THE ACCOUNT
LED TO NOT USING THE API SINCE IT DOES NOT WORK
TESTEST ROUTES VIA POSTMAN
*/

app.post('/transfer', (req, res) => {
  console.log(req.body,'this is the body');
  res.sendStatus(202);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
