exports.seed = function(knex) {
  return knex('trucks')
    .del()
    .then(function() {
      return knex('trucks').insert([
        {
          id: 1,
          truckName: "Angela's Tacos",
          food_type: 'Tacos',
          rating: 4.3,
          truck_image: 'imageUrl',
          location_lat: '123456',
          location_lng: '2234453',
          operators_id: 3,
          'total-number-of-ratings': 4
        },
        {
          id: 2,
          truckName: "Bob's Burgers",
          food_type: 'Burgers',
          rating: 4.1,
          truck_image: 'imageUrl',
          location_lat: '123456',
          location_lng: '2234453',
          operators_id: 4,
          'total-number-of-ratings': 6
        }
      ]);
    });
};
