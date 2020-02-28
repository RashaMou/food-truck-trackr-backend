const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../api/users/users-router');
const trucksRouter = require('../api/trucks/trucks-router');
const favoritesRouter = require('../api/favorites/favorites-router');
const menuRouter = require('../api/menu/menu-router');

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api');
server.use('/', authRouter);
server.use('/users', usersRouter);
server.use('/trucks', trucksRouter);
server.use('/favorites', favoritesRouter);
server.use('/menu', menuRouter);

server.get('/', (req, res) => {
  res.send('welcome to foodtruck trackr');
});

module.exports = server;
