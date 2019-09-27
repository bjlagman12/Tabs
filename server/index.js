const express = require('express');
const app = express();
const port = 3000

const bodyParser = require('body-parser')

app.use(express.static('public/dist'))

app.use(bodyParser.json())

app.post('/transfer', (req, res) => {
  console.log(req.body)

})

app.listen(port, () => console.log(`Listening on port ${port}`))