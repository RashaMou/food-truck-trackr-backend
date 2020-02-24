const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const signToken = require('../../utils/signToken');
const validateRegistration = require('../../middleware/registration-validation');

router.post('/register', validateRegistration, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  const token = signToken(user);
  Users.add(user)
    .then(saved => {
      res.status(201).json({
        token: token,
        id: saved.id,
        email: saved.email,
        role: saved.role,
        message: `Welcome ${user.username}!`
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { email, password } = req.body;
  Users.findBy({ email })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          token,
          user_id: user.id,
          user_name: user.name,
          role: user.role,
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).send('error', error);
    });
});

module.exports = router;
