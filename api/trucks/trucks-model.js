const db = require('../../database/dbConfig');

module.exports = {
  addTruck,
  findTrucks,
  findTruckById,
  findByOpId,
  updateTruck,
  updateTruck
};

function addTruck(truck) {
  return db('trucks').insert(truck, 'id');
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

function updateTruck(id) {
  return db('trucks')
    .where({ id })
    .delete();
}
