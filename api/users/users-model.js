const db = require('../../database/dbConfig');

module.exports = {
  add,
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
  return db('users')
    .where(filter)
    .first();
}

function findById(id) {
  return (
    db('users')
      // .select('id', 'username', 'email', 'role', 'avatar')
      .where({ id })
      .first()
  );
}

async function add(user) {
  const [id] = await db('users')
    .insert(user)
    .returning('id');
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
