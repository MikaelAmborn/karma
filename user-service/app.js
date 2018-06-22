require('dotenv').load();
const express = require('express');
const user = require('./models/user')

const app = express();
app.use(express.json());

app.post('/locations', 
  async (req, res) => {
    try {
      const locationId = await user.createLocation(req.body.name);
      res.send({ locationId });
    } catch (err) {
      console.log(`Error creating user location ${req.body.name}: `, err);
    }
});

module.exports = app;
