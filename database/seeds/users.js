exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: 1,
          username: 'Rasha',
          email: 'diner@rasha.com',
          role: 'diner',
          avatar: 'imageUrl'
        },
        {
          id: 2,
          username: 'Mara',
          email: 'diner@mara.com',
          role: 'diner',
          avatar: 'imageUrl'
        },
        {
          id: 3,
          username: 'Rebecca',
          email: 'operator@rebecca.com',
          role: 'operator',
          avatar: 'imageUrl'
        },
        {
          id: 3,
          username: 'Max',
          email: 'operator@max.com',
          role: 'operator',
          avatar: 'imageUrl'
        }
      ]);
    });
};
