require('dotenv').load();
const express = require('express');
const user = require('./models/user')

const app = express();
app.use(express.json());

app.post('/locations', 
  (req, res) => {
    user.createLocation(req.body.name)
      .then(id => {
        res.send({"locationId": id});
      });
});

module.exports = app;
