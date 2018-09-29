const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id); // _id of mongodb's users
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      if (!profile) {
        return done(null, false);
      }

      User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            displayName: profile.displayName,
            name: {
              familyName: profile.name.familyName,
              givenName: profile.name.givenName,
              middleName: profile.name.middleName
            },
            email: profile.email,
            avatarUrl: profile.profileUrl,
            gender: profile.gender,
            language: profile.languages[0],
            facebookId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
