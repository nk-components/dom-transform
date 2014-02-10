'use strict';

var trim = require('trim');
var prefix = require('prefix');
var prop = prefix('transform');
var fns = require('./lib/properties');

var _has = Object.prototype.hasOwnProperty;

var shortcuts = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};


exports = module.exports = transform;

function transform(target, properties) {
  var output = [];
  var i;
  var name;

  for (i in properties) {
    // replace shortcut with its transform value.
    name = _has.call(shortcuts, i)
      ? name = shortcuts[i]
      : name = i;

    if (_has.call(fns, name)) {
      output.push(fns[name](numToString(properties[i])));
    } else {
      console.warn(name, 'is not a valid property');
    }
  }

  style(target, output.join(' '));
}


exports.get = get;

function get(target) {
  return style(target);
}


exports.none = none;

function none(target) {
  target.style[prop] = '';
}


function style(target, value) {
  if (!value) {
    return target.style[prop];
  }

  target.style[prop] = value;
}


function numToString(value) {
  if (typeof value === 'number') {
    value += '';
  } else {
    value = trim(value);
  }

  return value;
}
