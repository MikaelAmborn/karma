const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

exports.create = async (name) => {
  const data = await db.one('insert into locations(name) values($1) returning id', [name])
  console.log("Inserted new location in db with id ", data.id);
  return data.id;
}
