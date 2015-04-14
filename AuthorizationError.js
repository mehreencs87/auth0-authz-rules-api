/*
 * Base class for all errors
 */
function AuthorizationError(code, message) {
  this.code = code;
  Error.call(this, message);
  this.message = message; //Error.call(this, message) doesnt set the message.... ?
}

AuthorizationError.prototype = Object.create(Error.prototype);
AuthorizationError.prototype.constructor = AuthorizationError;

module.exports = AuthorizationError;