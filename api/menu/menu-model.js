const db = require('../../database/dbConfig');

module.exports = {
  addMenuItem,
  deleteMenuItem,
  findMenuItemById,
  findMenuItemsByTruckId,
  updateMenuItem
};

function addMenuItem(item) {
  return db('findMenuItemById').insert(item, 'id');
}

function findMenuItemById(id) {
  return db('menu')
    .where({ id })
    .first();
}

function findMenuItemsByTruckId(trucks_id) {
  return db('menu').where({ trucks_id });
}

function updateMenuItem(id, changes) {
  return db('menu')
    .where({ id })
    .update(changes);
}

function deleteMenuItem(id) {
  return db('menu')
    .where({ id })
    .del();
}
