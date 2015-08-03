var AuthorizationError = require('./AuthorizationError');

/*
 * Defines a tenant-traceable error that flows 
 * to the target application via its callback url.
 */
function ApplicationError (code, message, additionalInformation) {
  AuthorizationError.call(this, code, message);
  
  if ( additionalInformation ) {
    this.additionalInformation = additionalInformation;
  }
  
  this.name = 'ApplicationError';
  this.statusCode = 500;
}

ApplicationError.prototype = Object.create(AuthorizationError.prototype);
ApplicationError.prototype.constructor = ApplicationError;

module.exports = ApplicationError;
