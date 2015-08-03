var AuthorizationError = require('./AuthorizationError');

// UnauthorizedError comparisons:
// auth0-server: https://github.com/auth0/auth0-server/blob/master/lib/auth/errors/UnauthorizedError.js

function UnauthorizedError (message) {
  // In auth0-server this inherits from ApplicationError: https://github.com/auth0/auth0-server/blob/master/lib/auth/errors/UnauthorizedError.js#L4
  // In auth0-sandbox this inherits from AuthorizationError: https://github.com/auth0/auth0-sandbox/blob/master/lib/UnauthorizedError.js#L9
  // Houston, we have drift.
  AuthorizationError.call(this, 'unauthorized', message);
  
  this.name = 'UnauthorizedError';
  this.description = message; // Keep consistent w/ legacy api
  this.statusCode = 401;
}

UnauthorizedError.prototype = Object.create(AuthorizationError.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;
