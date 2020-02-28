exports.seed = function(knex) {
  return knex('favorites')
    .del()
    .then(function() {
      return knex('favorites').insert([
        { id: 1, users_id: 1, trucks_id: 2 },
        { id: 2, users_id: 1, trucks_id: 1 }
      ]);
    });
};
