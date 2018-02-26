const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.send({ message: 'The user is logging in' });
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({ message: 'The user logged out' });
  });

  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });
};
