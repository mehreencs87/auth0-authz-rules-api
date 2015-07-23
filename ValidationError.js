var AuthorizationError = require('./AuthorizationError');

function ValidationError (code, message) {
  AuthorizationError.call(this, code, message);
  
  this.description = message; // Keep consistent w/ legacy api
  this.status_code = 400;
}

ValidationError.prototype = Object.create(AuthorizationError.prototype);
ValidationError.prototype.constructor = ValidationError;

module.exports = ValidationError;