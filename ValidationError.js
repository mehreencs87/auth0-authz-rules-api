function ValidationError (code, description) {
  var err = Error.call(this, description);
  err.name = 'ValidationError';
  err.code = code;
  err.description = description;
  err.statusCode = 400;
  return err;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

module.exports = ValidationError;
