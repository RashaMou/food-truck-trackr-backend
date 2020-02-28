exports.up = function(knex) {
  return knex.schema.createTable('favorites', tbl => {
    tbl.increments();
    tbl
      .integer('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('trucks_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('trucks')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites');
};
