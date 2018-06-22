const axios = require('axios');
const jwt = require('jsonwebtoken');
const user = require('./user');


const url = 'http://localhost:3000'

function jwtToken(userId) {
  return jwt.sign({ userId }, 'karma-secret');
}

exports.create = (userId, locationName) => {
  return axios
    .post(
      `${url}/locations`,
      { name: locationName },
      { headers: {
        'Authorization': `Bearer ${jwtToken(userId)}`,
        'Content-Type': 'application/json',
      }})
    .then(resp => {
      console.log("Received response from location service", resp.data)
      return resp.data
    })
    .catch(err => {
      console.warn("Error calling location service: ", err);
      throw `Failed to create location ${locationName}`;
    })
}

