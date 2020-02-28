exports.up = function(knex) {
  return knex.schema.table('user-truck-rating', tbl => {
    tbl.decimal('user-rating', 2, 1);
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumn('user-rating');
};
