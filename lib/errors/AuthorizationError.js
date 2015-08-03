/*
 * Base class for most errors
 */
function AuthorizationError(code, message) {
  // Capture stack trace if possible.
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    Error.call(this);
  }

  this.name = 'AuthorizationError';
  this.code = code;
  this.message = message;
  this.statusCode = 401;
}

AuthorizationError.prototype = Object.create(Error.prototype);
AuthorizationError.prototype.constructor = AuthorizationError;

module.exports = AuthorizationError;