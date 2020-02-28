exports.up = function(knex) {
  return knex.schema.table('trucks', tbl => {
    tbl.integer('total-number-of-ratings');
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumnIfExists('total-number-of-ratings');
};
