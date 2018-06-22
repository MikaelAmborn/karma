require('dotenv').load();
const express = require('express');
const location = require('./models/location');
var jwt = require('express-jwt');

const app = express();
app.use(express.json());
app.use(jwt({ secret: 'karma-secret'}));
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});

app.post('/locations', 
  (req, res) => {
    location.create(req.body.name)
      .then(id => {
        res.send({"locationId": id});
      });
});

module.exports = app;
