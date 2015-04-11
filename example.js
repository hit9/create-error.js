var createError = require('./index.js');
var BaseError   = createError('BaseError');
var CustomError = createError('CustomError', BaseError);

throw new CustomError('throw a custom error')
