const db = require('../../database/dbConfig');

module.exports = {
  add,
  find,
  findById,
  remove,
  update,
  findByUserId
};

function find() {
  return db('favorites');
}

function findById(id) {
  return db('favorites')
    .where({ id })
    .first();
}

function findByUserId(users_id) {
  return db('favorites')
    .where({ users_id })
    .first();
}

async function add(favorite) {
  const [id] = await db('favorites').insert(favorite, 'id');
  return findById(id);
}

function remove(id) {
  return db('favorites')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes, 'id', '*');
}
