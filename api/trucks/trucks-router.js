const express = require('express');
const storage = require('../../middleware/multer');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

const router = express.Router();
const Trucks = require('./trucks-model');
const Users = require('../users/users-model');

// get all trucks
router.get('/', async (req, res) => {
  const trucks = await Trucks.getTrucks();
  try {
    if (trucks) {
      res.status(200).json(trucks);
    } else res.status(404).json({ error: 'No trucks available.' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// get trucks by operator id
router.get('/operators/:id', async (req, res) => {
  const trucks = await Users.findByOpId(req.params.id);
  try {
    if (trucks) {
      res.status(200).json(trucks);
    } else
      res.status(404).json({ error: 'This operator does not have any trucks' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

router.post('/upload', (req, res, next) => {
  const upload = multer({ storage }).single('img');
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    }
    console.log('file uploaded to server');
    console.log(req.file);

    const path = req.file.path;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(
      path,
      { public_id: `${uniqueFilename}` },
      function(err, image) {
        if (err) return res.send(err);
        console.log('file uploaded to Cloudinary');
        // remove file from server
        const fs = require('fs');
        fs.unlinkSync(path);
        // return image details
        res.json(image);
      }
    );
  });
});

// add truck
router.post('/', async (req, res) => {
  const truck = await Trucks.addTruck(req.body);

  try {
    if (truck) {
      res.status(201).json(truck);
    } else
      res.status(404).json({ error: 'This operator does not have any trucks' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// edit truck
router.put('/:id', async (req, res) => {
  const truck = await Trucks.update(req.params.id, req.body);
  try {
    if (truck) {
      res.status(201).json(truck);
    } else res.status(404).json({ error: 'No truck found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

// delete truck
router.delete('/:id', async (req, res) => {
  const count = await Trucks.remove(req.params.id);
  try {
    if (count > 0) {
      res.status(200).json(`Truck with id ${id} was deleted`);
    } else res.status(404).json({ error: 'No truck found with this ID' });
  } catch (err) {
    res.status(500).json('Database error', err);
  }
});

module.exports = router;
