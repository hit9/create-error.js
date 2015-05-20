var createError = require('./index.js');
var BaseError   = createError('BaseError');
var CustomError = createError('CustomError', BaseError, 0x001);

throw new CustomError('throw a custom error')
