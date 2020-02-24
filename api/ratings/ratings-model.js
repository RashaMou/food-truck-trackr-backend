const db = require('../../database/dbConfig');

module.exports = {
  addRating,
  deleteRating,
  editRating,
  getRatingByTruckId
};

function addRating(data) {
  return db('user-truck-rating').insert(data, 'id');
}

function getRatingById(id) {
  return db('user-truck-rating')
    .where({ id })
    .first();
}

function getRatingByTruckId(truck_id) {
  return db('user-truck-rating').where({ truck_id });
}

function editRating(id, changes) {
  return db('user-truck-rating')
    .where({ id })
    .update(changes);
}

function deleteRating(id) {
  return db('user-truck-rating')
    .where({ id })
    .del();
}
