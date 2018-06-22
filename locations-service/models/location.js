var pgp = require('pg-promise')();
var db = pgp(process.env.DB_URL);

exports.create = function(name) {
  return db.one('insert into locations(name) values($1) returning id', [name])
    .then(data => {
      console.log("Inserted new location in db with id ", data.id);
      return data.id;
    });
}
