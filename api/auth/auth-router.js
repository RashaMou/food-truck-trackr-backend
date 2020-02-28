const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const signToken = require('../../utils/signToken');
const validateRegistration = require('../../middleware/registration-validation');

router.post('/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  // user.password = hash;
  // const token = signToken(user);
  const newUser = await Users.add(user);
  try {
    if (newUser) {
      res.status(201).json(user);
    } else res.status(404);
  } catch (error) {
    console.log(error);
    res.status(500).json('noooooo');
  }
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
