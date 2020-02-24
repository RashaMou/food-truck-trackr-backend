const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../api/users/users-router');
const trucksRouter = require('../api/trucks/trucks-router');
const favoritesRouter = require('../api/favorites/favorites-router');

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/trucks', trucksRouter);
server.use('/api/favorites', favoritesRouter);

server.get('/', (req, res) => {
  res.send('welcome to foodtruck trackr');
});

module.exports = server;
