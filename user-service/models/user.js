const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);
const location = require('./location')

exports.find = function(name) {
  return db.one('select id from users where username=$1', [name])
    .then(data => {
      console.log(`Found user ${name} with id ${data.id}`);
      return data.id;
    });
}

exports.createLocation = function(locationName) {
  return this.find('testuser')
    .then(userId => {
      return location.create(userId, locationName)
        .then(resp => {
          createUserLocation(userId, resp.locationId);
          return resp.locationId;
        });
    });
}

function createUserLocation(userId, locationId) {
  db.none('insert into user_locations(user_id, location_id) values($1, $2)', [ userId, locationId ])
    .then(() => console.log(`Inserted new user location (${userId}, ${locationId})`));
}
