'use strict';

var util = require('util');

exports = module.exports = function(name, base) {
  base = base || Error;

  var _ = function(message) {
    base.call(this);
    base.captureStackTrace(this, this.constructor)
    this.message = message || '';
  }
  util.inherits(_, base);
  _.prototype.name = name;
  _.captureStackTrace = base.captureStackTrace;
  _.prototype.inspect = function() {
    return util.format('[%s]', this.name);
  };
  return _;
};
