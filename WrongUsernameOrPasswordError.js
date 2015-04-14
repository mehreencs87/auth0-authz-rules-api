function WrongUsernameOrPasswordError (user_id, message) {
  var err = Error.call(this, message || 'Wrong email or password.');
  err.name = 'WrongUsernameOrPasswordError';
  err.user_id = user_id;
  return err;
}

WrongUsernameOrPasswordError.prototype = Object.create(Error.prototype);
WrongUsernameOrPasswordError.prototype.constructor = WrongUsernameOrPasswordError;

module.exports = WrongUsernameOrPasswordError;
