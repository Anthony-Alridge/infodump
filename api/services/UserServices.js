const User = require('../models/user');

/**
 * Sign up a new user.
 *
 * @returns {Promise.<User>} A promise resolving to the newly registered User, or rejected with an error.
 */
var create = function(username, password) {
  let user = new User({ username: username, password: password })

  return user.save()
};

/**
 * Sign in with a given username, password combination
 *
 * @returns {Promise.<User>} A promise resolving to the authenticated User, or rejected with a `PasswordMismatchError`.
 */
var authenticate = function(username, password) {
  return User.forge({ username: username })
    .fetch()
    .then(function (user) {
      return user.authenticate(password)
    })
};

exports.create = create;
exports.authenticate = authenticate;
