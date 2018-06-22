require('dotenv').load();
const express = require('express');
const location = require('./models/location');
const jwt = require('express-jwt');

const app = express();
app.use(express.json());
app.use(jwt({ secret: 'karma-secret'}));
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});

app.post('/locations', 
  async (req, res) => {
    const locationId = await location.create(req.body.name);
    res.send({ locationId });
});

module.exports = app;
