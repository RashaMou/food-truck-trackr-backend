exports.seed = function(knex) {
  return knex('user-truck-rating')
    .del()
    .then(function() {
      return knex('user-truck-rating').insert([
        { id: 1, rating: 2, truck_id: 1, user_id: 1 },
        { id: 2, rating: 4, truck_id: 2, user_id: 2 },
        { id: 3, rating: 5, truck_id: 1, user_id: 2 }
      ]);
    });
};
