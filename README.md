# boilerplate-express-passport-facebook-login

Boilerplate of Facebook Login with Express and Passport.

## Required

* Create your facebook account for development and register your app.
* Add `localhost:3000` to your app account.
* Add `localhost:3000/auth/facebook/callback` to your app account for callback url.

## Create dot env files

```bash
$ touch .env
$ echo 'FACEBOOK_CLIENT_ID={YOUR_CLIENT_ID}' >> .env
$ echo 'FACEBOOK_CLIENT_SECRET={YOUR_CLIENT_SECRET}' >> .env
$ echo 'MONGO_URL={YOUR_MONGO_URL}' >> .env
$ echo 'COOKIE_KEY={ANY_NAME_OR_NOTHING_IS_OK}' >> .env
$ echo 'COOKIE_EXPIRED_DAYS={ANY_NUMBER_OR_NOTHING_IS_OK}' >> .env
```

## APIs

### Login API

* localhost:3000/auth/facebook

### GET User API

* localhost:3000/api/user

### Logout API

* localhost:3000/api/logout
