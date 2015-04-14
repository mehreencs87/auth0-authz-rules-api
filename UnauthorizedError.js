var ApplicationError = require('./ApplicationError');

function UnauthorizedError (message) {
  ApplicationError.call(this, 'unauthorized', message);
  this.description = message;
  this.name = 'UnauthorizedError';
}

UnauthorizedError.prototype = Object.create(ApplicationError.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;
