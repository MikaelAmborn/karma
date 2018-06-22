var pgp = require('pg-promise')();
var db = pgp(process.env.DB_URL);

exports.create = function(name) {
  return db.one('insert into locations(name) VALUES($1) RETURNING id', [name])
    .then(data => {
      console.log("Inserted new location in db with id ", data.id);
      return data.id
    });
}
