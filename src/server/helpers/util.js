var bcrypt = require('bcrypt');
var colors = require('colors/safe');

module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect('/');
  },
  hashing: function (password) {
    return bcrypt.hashSync(password, 10);
  },
  comparePassword: function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  },
  rewriteUrl: function (url) {
    var secureUrl = process.env.HOST ;
    if(url.split(':')[0] === 'http') {
      return secureUrl+'?url='+url;
    } else {
      return url;
    }
  }
}