const db = require('../../database/dbConfig');

module.exports = {
  addTruck,
  findTrucks,
  findTruckById,
  findByOpId,
  updateTruck,
  removeTruck,
  getCurrentRating,
  getTotalRatings
};

function addTruck(truck) {
  return db('trucks').insert(truck, 'id');
}

function getCurrentRating(id) {
  return db('trucks')
    .select('rating')
    .where({ id });
}

function getTotalRatings(id) {
  return db('trucks')
    .select('total-number-of-ratings')
    .where({ id });
}

function findTrucks() {
  return db('trucks');
}

function findTruckById(id) {
  return db('trucks')
    .where({ id })
    .first();
}

function findByOpId(operators_id) {
  return db('trucks').where({ operators_id });
}

function updateTruck(id, changes) {
  return db('trucks')
    .where({ id })
    .update(changes);
}

function removeTruck(id) {
  return db('trucks')
    .where({ id })
    .del();
}
