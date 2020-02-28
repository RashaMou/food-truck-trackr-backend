exports.up = function(knex) {
  return knex.schema.table('user-truck-rating', tbl => {
    tbl.integer('rating');
  });
};

exports.down = function(knex) {};
