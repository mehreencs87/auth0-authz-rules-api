// This comes from auth0-users: https://github.com/auth0/auth0-users/blob/master/lib/errors/ValidationError.js

// The original Error definition inherited directly from Error
function ValidationError (code, message) {
  // Capture stack trace if possible.
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    Error.call(this);
  }
  
  this.code = code;
  this.message = message;  
  this.name = 'ValidationError';
  this.description = message; // Keep consistent w/ legacy api
  this.statusCode = 400;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

module.exports = ValidationError;