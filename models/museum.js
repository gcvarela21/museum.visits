// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const muse = {
  all(cb) {
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    // 'museums' aka table name///
    orm.all('museums', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('museums', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('museums', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('museums', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (museum_controller.js).
module.exports = muse;