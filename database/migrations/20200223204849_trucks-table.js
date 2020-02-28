exports.up = function(knex) {
  return knex.schema.createTable('trucks', tbl => {
    tbl.increments();
    tbl
      .string('truck_name', 128)
      .notNullable()
      .unique();
    tbl.string('food_type', 128).notNullable();
    tbl.integer('rating');
    tbl.string('truck_image').notNullable();
    tbl.string('location_lat', 128).notNullable();
    tbl.string('location_lng', 128).notNullable();
    tbl
      .integer('operators_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trucks');
};
