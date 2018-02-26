require('dotenv').config();

module.exports = {
  facebookClientID: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  mongoURL: process.env.MONGO_URL,
  cookieKey: process.env.COOKIE_KEY || 'google-auth-key',
  cookieExpiredDays: process.env.COOKIE_EXPIRED_DAYS || 30
};
