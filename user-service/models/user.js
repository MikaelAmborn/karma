const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);
const location = require('./location')

exports.find = async (name) => {
  const data = await db.one('select id from users where username=$1', [name]);
  console.log(`Found user ${name} with id ${data.id}`);
  return data.id;
}

exports.createLocation = async (locationName) => {
  const userId = await this.find('testuser')
  const resp = await location.create(userId, locationName);
  await createUserLocation(userId, resp.locationId);
  return resp.locationId;
}

const createUserLocation = async (userId, locationId) => {
  await db.none('insert into user_locations(user_id, location_id) values($1, $2)',
    [ userId, locationId ]);
  console.log(`Inserted new user location (${userId}, ${locationId})`);
}
