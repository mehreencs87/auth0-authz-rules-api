/*
 * Base class for all errors
 */
function AuthorizationError(code, message) {
  // There is no additional value in calling `Error.call` since
  // we capture the stack trace here.
  Error.captureStackTrace(this, this.constructor);

  // Because this function will be invoked by subclasses using `.call`,
  // `this.constructor` will refer to the caller's correct name
  this.name = this.constructor.name;
  
  this.code = code || this.name.toLowerCase();
  this.message = message;
  
  // By default, we start with a 500 (internal server error).
  // Other error sub-classes can override this as needed.
  // This means that this constructor must be invoked before sub-classes
  // customize the error fields.
  this.status_code = 401;
}

AuthorizationError.prototype = Object.create(Error.prototype);
AuthorizationError.prototype.constructor = AuthorizationError;

module.exports = AuthorizationError;