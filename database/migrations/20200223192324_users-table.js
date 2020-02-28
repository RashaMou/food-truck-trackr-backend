exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('email', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
    tbl.string('username', 128);
    tbl.string('avatar', 128);
    tbl.string('role', 8);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
