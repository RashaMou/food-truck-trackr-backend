const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../api/users/users-router');

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('welcome to foodtruck trackr');
});

module.exports = server;
