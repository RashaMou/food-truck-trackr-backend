exports.up = function(knex) {
  return knex.schema.createTable('user-truck-rating', tbl => {
    tbl.increments();
    tbl.decimal('rating', 1, 2).notNullable();
    tbl
      .integer('truck_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('trucks')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user-truck-rating');
};
