exports.up = function(knex) {
  return knex.schema.createTable('menu', tbl => {
    tbl.increments();
    tbl.string('menu_item_name', 128).notNullable();
    tbl.decimal('menu_item_price', 3, 2).notNullable();
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
  return knex.schema.dropTableIfExists('menu');
};
