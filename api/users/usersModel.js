const db = require('../../database/db-config');

module.exports = {
  register,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db('users').select('id', 'username', 'email', 'role', 'avatar');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'email', 'role', 'avatar')
    .where({ id })
    .first();
}

async function register(user) {
  const [id] = await db('users').insert(user);
  returning('id');
  return findById(id);
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes, 'id', '*');
}
