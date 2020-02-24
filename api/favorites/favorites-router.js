const express = require('express');
const router = express.Router();
const Favorites = require('./favorites-model');

// get favorites by user id
router.get('/:id', async (req, res) => {
  const favoritesArray = await Favorites.findByUserId(req.params.id);
  try {
    if (favoritesArray.length > 0) {
      res.status(200).json(favoritesArray);
    } else res.status(404).json({ error: 'This user has no favorites' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// add favorite
router.post('/', async (req, res) => {
  const favorite = await Favorites.add(req.body);
  try {
    if (favorite) {
      res
        .status(201)
        .json(`favorite ${favorite.id} added to user's favorites array`);
    }
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// delete favorite
router.delete('/:id', async (req, res) => {
  const count = await Favorites.remove(req.params.id);
  try {
    if (count > 0) {
      res.status(200).json(`Favorite with id ${id} was deleted`);
    } else res.status(404).json({ error: 'No favorite found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

module.exports = router;
