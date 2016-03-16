// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var cookieSession = require('cookie-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var knex = require('../../db/knex');

if ( !process.env.NODE_ENV ) { require('dotenv').config(); }

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/login/facebook/callback",
    profileFields: ['id', 'name', 'picture', 'displayName', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    // console.log('user: ', req.user);
    // console.log(profile);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log('logging in with passport-facebook');
    knex('users')
      .where({sm_id: profile.id})
      .orWhere({email: profile.emails[0].value})
      .first()
      .then(function (user) {
        console.log(user);
        if (!user) {
          return knex('users').insert({
            sm_id: profile.id,
            email: profile.emails[0].value,
            fname: profile.name.givenName,
            lname: profile.name.familyName,
            u_img: 'https://graph.facebook.com/'+profile.id+'/picture?type=large'
          },'u_id')
            .then(function (u_id) {
              return done(null, u_id[0]);
            });
        } else {
          return done(null, user.u_id);
        }
      });
  }));

passport.serializeUser(function(user, done) {
  //later this will be where you selectively send to the browser 
  // an identifier for your user, like their primary key from the 
  // database, or their ID from linkedin
  console.log('serializeUser',user);

  done(null, user);
});

passport.deserializeUser(function(userId, done) {
  console.log('deserializeUser',userId);
  // here is where you will go to the database and get the 
  // user each time from it's id, after you set up your db
    if ( userId ) {
    knex('users')
      .where({ u_id: userId })
      .first()
      .then(function (user) {
        ( !user ) ? done() : done(null, user);
      })
      .catch(function (err) {
        done(err, null);
      })  
  } else {
    done();
  }
  // done(null, user)
});

// *** routes *** //
// var routes = require('./routes/index.js');
var register = require('./routes/register.js');
var places = require('./routes/places.js');
var events = require('./routes/events.js');
var profile = require('./routes/profile.js');
var login = require('./routes/login.js');
var pins = require('./routes/pins.js');

// *** express instance *** //
var app = express();


// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'facebook login',
  keys: [process.env.COOKIE_KEY1, process.env.COOKIE_KEY2]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));


// *** main routes *** //
app.use(function (req, res, next) {
  if (req.user) {
    res.locals.user = req.user;
  }
  next();
});
app.use('/', register);
app.use('/places', places);
app.use('/events',events);
app.use('/profile',profile);
app.use('/login', login);
app.use('/pins', pins);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
