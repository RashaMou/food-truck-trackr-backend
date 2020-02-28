exports.up = function(knex) {
  return knex.schema.table('user-truck-rating', tbl => {
    tbl.dropColumn('user-rating');
  });
};

exports.down = function(knex) {};
