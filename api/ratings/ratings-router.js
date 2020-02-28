const express = require('express');
const router = express.Router();
const Rating = require('./ratings-model');
const Trucks = require('../trucks/trucks-model');

// get rating by truck & user id
router.get('/:truckId', async (req, res) => {
  const { user_id } = req.body;
  const { truck_id } = req.params;
  const truckRating = await Rating.getRatingByTruckAndUserId(truck_id, user_id);
  try {
    if (truckRating) {
      // increment total number of ratings for truck by 1
      const newTotalNumberOfRatings = currentTotalRatings + 1;
      Trucks.incrementRatings(truck_id, newTotalNumberOfRatings);

      // calculate new rating total for truck
      const currentRating = Trucks.getCurrentRating(truck_id);
      const newRating = (currentRating + truckRating) / 2;
      const ratingUpdate = {
        'total-number-of-ratings': newTotalRatings,
        rating: newRating
      };
      Trucks.updateTruck(truck_id, ratingUpdate);
      res.status(200).json(truckRating);
    } else res.status(404).json({ error: 'This truck has no rating' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// add rating
router.post('/:truck_id', async (req, res) => {
  const { truck_id } = req.params;
  const { user_id, rating } = req.body;
  const data = {
    truck_id: truck_id,
    user_id: user_id,
    rating: rating
  };
  const newUserRating = await Rating.addRating(data);
  try {
    if (newUserRating) {
      // increment total number of ratings for truck by 1
      const currentTotalRatings = Trucks.getTotalRatings(truck_id);

      // calculate new rating total for truck
      const currentRating = Trucks.getCurrentRating(truck_id);
      const newRating = (currentRating + newUserRating) / 2;
      const ratingUpdate = {
        'total-number-of-ratings': currentTotalRatings + 1,
        rating: newRating
      };
      Trucks.updateTruck(truck_id, ratingUpdate);

      res.status(200).json(newUserRating);
    } else res.status(404).json({ error: 'This truck has no rating' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }

  try {
    if (newRating) {
      res.status(201).json(newRating);
    }
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// delete rating
router.delete('/:id', async (req, res) => {
  const count = await Rating.deleteRating(req.params.id);
  try {
    if (count > 0) {
      res.status(200).json(`Rating with id ${id} was deleted`);
    } else res.status(404).json({ error: 'No rating found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// edit rating
router.put('/:id', async (req, res) => {
  const newRating = await Rating.update(req.params.id, req.body);
  try {
    if (newRating) {
      res.status(201).json(newRating);
    } else res.status(404).json({ error: 'No rating found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

module.exports = router;
