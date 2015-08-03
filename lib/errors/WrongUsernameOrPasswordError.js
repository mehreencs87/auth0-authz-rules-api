// This comes from auth0-users: https://github.com/auth0/auth0-users/blob/master/lib/errors/WrongUsernameOrPasswordError.js
// And: https://github.com/auth0/auth0-users/blob/master/lib/errors/WrongUsernameOrPasswordError.js
function WrongUsernameOrPasswordError (user_id, message) {
  // Capture stack trace if possible.
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    Error.call(this);
  }
  
  this.code = 'wrongusernameorpassword';
  this.message = message;  
  this.name = 'WrongUsernameOrPasswordError';
  this.user_id = user_id;
  this.statusCode = 400;
}

WrongUsernameOrPasswordError.prototype = Object.create(Error.prototype);
WrongUsernameOrPasswordError.prototype.constructor = WrongUsernameOrPasswordError;

module.exports = WrongUsernameOrPasswordError;
