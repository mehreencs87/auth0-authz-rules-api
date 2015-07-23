var AuthorizationError = require('./AuthorizationError');

function WrongUsernameOrPasswordError (user_id, message) {
  AuthorizationError.call(this, 'wrongusernameorpassworderror', message);

  this.user_id = user_id;
  this.status_code = 400;
}

WrongUsernameOrPasswordError.prototype = Object.create(AuthorizationError.prototype);
WrongUsernameOrPasswordError.prototype.constructor = WrongUsernameOrPasswordError;

module.exports = WrongUsernameOrPasswordError;
