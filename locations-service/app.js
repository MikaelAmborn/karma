require('dotenv').load();
const express = require('express');
const location = require('./models/location');
const app = express();
app.use(express.json());

app.post('/locations', (req, res) => {
  location.create(req.body.name)
    .then(id => {
      res.send({"locationId": id});
    })
    .catch(error => {
      console.log('create locations error:', error);
    });
}) 

module.exports = app
