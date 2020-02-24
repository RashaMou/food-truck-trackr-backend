exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('menu').insert([
        {
          id: 1,
          trucks_id: 1,
          'menu-item-name': 'El Pastor',
          'menu-item-price': 6
        },
        {
          id: 2,
          trucks_id: 2,
          'menu-item-name': 'Classic',
          'menu-item-price': 8
        }
      ]);
    });
};
