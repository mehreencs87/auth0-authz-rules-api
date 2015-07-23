var AuthorizationError = require('./AuthorizationError');

function UnauthorizedError (message) {
  AuthorizationError.call(this, 'unauthorizederror', message);
  
  this.description = message; // Keep consistent w/ legacy api
  this.status_code = 401;
}

UnauthorizedError.prototype = Object.create(AuthorizationError.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;
