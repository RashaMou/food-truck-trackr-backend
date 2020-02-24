const express = require('express');
const router = express.Router();
const Menu = require('./menu-model');

// get menu items by truck id
router.get('/:truckId', async (req, res) => {
  const menuArray = await Menu.findMenuItemsByTruckId(req.params.truckId);
  try {
    if (menuArray.length > 0) {
      res.status(200).json(menuArray);
    } else res.status(404).json({ error: 'This truck has no menu items' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// get menu item by id
router.get('/:id', async (req, res) => {
  const menuItem = await Menu.findMenuItemById(req.params.id);
  try {
    if (menuItem) {
      res.status(200).json(menuItem);
    } else res.status(404).json({ error: 'TNo menu item with that id' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// add menu item
router.post('/', async (req, res) => {
  const newMenuItem = await Menu.addMenuItem(req.body);
  try {
    if (newMenuItem) {
      res.status(201).json(newMenuItem);
    }
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// delete menu item
router.delete('/:id', async (req, res) => {
  const count = await Menu.deleteMenuItem(req.params.id);
  try {
    if (count > 0) {
      res.status(200).json(`Menu item with id ${id} was deleted`);
    } else res.status(404).json({ error: 'No favorite found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// edit menu item
router.put('/:id', async (req, res) => {
  const menuItem = await Menu.update(req.params.id, req.body);
  try {
    if (menuItem) {
      res.status(201).json(menuItem);
    } else res.status(404).json({ error: 'No menu item found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

module.exports = router;
