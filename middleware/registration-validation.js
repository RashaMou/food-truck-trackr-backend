const Auth = require('../api/users/users-model');

module.exports = (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    res.status(400).json('Please provide an email, password, and role');
  } else {
    Auth.findBy({ email })
      .first()
      .then(user => {
        if (user) {
          res.status(400).send('That email already exists. Please try another');
        }
        next();
      })
      .catch(error => {
        res.status(500).send('Error registering user', error);
      });
  }
};
