var AuthorizationError = require('./AuthorizationError');

function ValidationError (message) {
  AuthorizationError.call(this, 'validationerror', message);
  
  this.description = message;
  this.status_code = 400;
}

ValidationError.prototype = Object.create(AuthorizationError.prototype);
ValidationError.prototype.constructor = ValidationError;

module.exports = ValidationError;