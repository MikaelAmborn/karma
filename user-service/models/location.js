const axios = require('axios');
const jwt = require('jsonwebtoken');
const user = require('./user');


const url = 'http://localhost:3000'

const jwtToken = (userId) => {
  return jwt.sign({ userId }, 'karma-secret');
}

exports.create = async (userId, locationName) => {
  const resp = await axios.post(
    `${url}/locations`,
    { name: locationName },
    { headers: {
      'Authorization': `Bearer ${jwtToken(userId)}`,
      'Content-Type': 'application/json',
    }}
  );
  console.log("Received response from location service", resp.data);
  return resp.data;
}

