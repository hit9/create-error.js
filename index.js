'use strict';

var util = require('util');

// createError(name[, base, code])
exports = module.exports = function(name, base, code) {
  if (arguments.length == 1) {
    // function (name)
    base = Error;
    code = 1;
  }

  if (arguments.length == 2) {
    if (isNaN(base)) {
      // function (name, base)
      code = 1;
    } else {
      // function (name, code)
      code = base;
      base = Error;
    }
  }

  var _ = function(message) {
    base.call(this);
    base.captureStackTrace(this, this.constructor)
    this.message = message || '';
  }
  util.inherits(_, base);
  _.prototype.name = name;
  _.prototype.code = code;
  _.captureStackTrace = base.captureStackTrace;
  _.prototype.inspect = function() {
    return util.format('[%s]', this.name);
  };
  return _;
};
