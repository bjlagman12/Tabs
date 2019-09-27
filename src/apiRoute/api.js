require("regenerator-runtime/runtime");
const axios = require('axios')
const sendFunds = async (obj) => {
  try {
    const response = await axios.post('/transfer', obj);
    console.log(response, 'this is the response')
  } catch (err) {
    console.log(err, 'this is the error')
  }
  axios.post('/transfer')


}

export default sendFunds