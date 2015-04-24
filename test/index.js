/*global describe, it, beforeEach */
'use strict';

var assert = require('assert');
var transform = require('dom-transform');
var el;

describe('transform', function() {
  beforeEach(function(done) {
    el = document.createElement('div');
    done();
  });

  translateDirTest('X');
  translateDirTest('Y');
  translateDirTest('Z');

  describe('translate', function() {
    it('should apply the values', function() {
      transform(el, {translate: '12px, 50%'});
      assert.equal(transform.get(el, 'transform'), 'translate(12px, 50%)');
    });

    it('should append comma', function() {
      transform(el, {translate: '10 10'});
      assert.equal(transform.get(el, 'transform'), 'translate(10px, 10px)');
    });

    it('should apply array values', function() {
      transform(el, {translate: [13, 50]});
      assert.equal(transform.get(el, 'transform'), 'translate(13px, 50px)');
    });
  });

  describe('translate3d', function() {
    it('should apply the values', function() {
      transform(el, {translate3d: '12px, 50%, 3em'});
      assert.equal(transform.get(el, 'transform'), 'translate3d(12px, 50%, 3em)');
    });

    it('should append comma', function() {
      transform(el, {translate3d: '12px 50% 3em'});
      assert.equal(transform.get(el, 'transform'), 'translate3d(12px, 50%, 3em)');
    });

    it('should apply array values', function() {
      transform(el, {translate3d: [13, 50, 10]});
      assert.equal(transform.get(el, 'transform'), 'translate3d(13px, 50px, 10px)');
    });
  });

  describe('scale', function() {
    it('should apply the values', function() {
      transform(el, {scale: '2, 0.5'});
      assert.equal(transform.get(el, 'transform'), 'scale(2, 0.5)');
    });

    it('should append comma', function() {
      transform(el, {scale: '2 0.5'});
      assert.equal(transform.get(el, 'transform'), 'scale(2, 0.5)');
    });

    it('should apply array values', function() {
      transform(el, {scale: [2, 0.5]});
      assert.equal(transform.get(el, 'transform'), 'scale(2, 0.5)');
    });
  });

  describe('scale3d', function() {
    it('should apply the values', function() {
      transform(el, {scale3d: '2, 0.5, 0.3'});
      assert.equal(transform.get(el, 'transform'), 'scale3d(2, 0.5, 0.3)');
    });

    it('should append comma', function() {
      transform(el, {scale3d: '2 0.5 0.3'});
      assert.equal(transform.get(el, 'transform'), 'scale3d(2, 0.5, 0.3)');
    });

    it('should apply array values', function() {
      transform(el, {scale3d: [2, 0.5, 0.3]});
      assert.equal(transform.get(el, 'transform'), 'scale3d(2, 0.5, 0.3)');
    });
  });

  unitLessTest('scaleX');
  unitLessTest('scaleY');
  unitLessTest('scaleZ');

  describe('rotate', function() {
    it('should apply the values', function() {
      transform(el, {rotate: '0.5turn'});
      assert.equal(transform.get(el, 'transform'), 'rotate(0.5turn)');
    });

    it('should use deg as default unit', function() {
      transform(el, {rotate: '0.5'});
      assert.equal(transform.get(el, 'transform'), 'rotate(0.5deg)');
    });
  });

  describe('rotate3d', function() {
    it('should append comma', function() {
      transform(el, {rotate3d: '1.1 2 10 10deg'});
      assert.equal(transform.get(el, 'transform'), 'rotate3d(1.1, 2, 10, 10deg)');
    });

    it('should apply array values', function() {
      transform(el, {
        rotate3d: [1.1, 2, 10, '10deg']
      });
      assert.equal(transform.get(el, 'transform'), 'rotate3d(1.1, 2, 10, 10deg)');
    });
  });

  rotateDirTest('X');
  rotateDirTest('Y');
  rotateDirTest('Z');

  describe('skew', function() {
    it('should apply the values', function() {
      transform(el, {skew: '30deg, -10deg'});
      assert.equal(transform.get(el, 'transform'), 'skew(30deg, -10deg)');

      transform(el, {skew: '30deg'});
      assert.equal(transform.get(el, 'transform'), 'skew(30deg)');
    });

    it('should use deg as default unit', function() {
      transform(el, {skew: '30 -10'});
      assert.equal(transform.get(el, 'transform'), 'skew(30deg, -10deg)');

      transform(el, {skew: '30'});
      assert.equal(transform.get(el, 'transform'), 'skew(30deg)');
    });
  });

  skewDirTest('X');
  skewDirTest('Y');

  describe('perspective', function() {
    it('should use px as default unit', function() {
      transform(el, {perspective: 10});
      assert.equal(transform.get(el, 'transform'), 'perspective(10px)');
    });

    it('should use custom unit', function() {
      transform(el, {perspective: '10px'});
      assert.equal(transform.get(el, 'transform'), 'perspective(10px)');
    });
  });

  describe('matrix', function() {
    it('should apply the values', function() {
      transform(el, {matrix: '1, 2, 3, 4, 5, 6'});
      assert.equal(transform.get(el, 'transform'), 'matrix(1, 2, 3, 4, 5, 6)');
    });

    it('should append comma', function() {
      transform(el, {matrix: '1 2 3 4 5 6'});
      assert.equal(transform.get(el, 'transform'), 'matrix(1, 2, 3, 4, 5, 6)');
    });
  });

  describe('matrix3d', function() {
    it('should apply the values', function() {
      transform(el, {
        matrix3d: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
      });
      assert.equal(transform.get(el, 'transform'), 'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)');
    });

    it('should append comma', function() {
      transform(el, {
        matrix3d: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16'
      });
      assert.equal(transform.get(el, 'transform'), 'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)');
    });
  });

  describe('transform-origin', function() {
    it('should apply the value', function() {
      transform(el, {origin: [0, 0]});
      assert.equal(transform.get(el, 'transformOrigin'), '0px 0px');
    });
  });

  describe('reset', function() {
    it('should clear', function() {
      transform(el, {x: 10});
      assert.equal(transform.get(el, 'transform'), 'translateX(10px)');
      transform.reset(el, 'transform');
      assert.equal(transform.get(el, 'transform'), '');
    });

    it('should clear all props', function() {
      transform(el, {
        x: 10,
        transformOrigin: [0, 0]
      });

      assert.equal(transform.get(el).transform, 'translateX(10px)');
      assert.equal(transform.get(el).transformOrigin, '0px 0px');

      transform.reset(el);
      assert.equal(transform.get(el).transform, '');
      assert.equal(transform.get(el).transformOrigin, '');
    });
  });
});

function translateDirTest(dir) {
  var prop = 'translate' + dir;

  describe(prop, function() {
    var opts;

    beforeEach(function(done) {
      opts = {};
      done();
    });

    it('should apply array value', function() {
      opts[prop] = [10];
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(10px)');
    });

    it('should apply string value', function() {
      opts[prop] = '11';
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(11px)');
    });

    it('should apply custom unit', function() {
      opts[prop] = '12em';
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(12em)');
    });

    it('should work with the shortcut ' + dir.toLowerCase(), function() {
      opts[dir.toLowerCase()] = 14;
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(14px)');
    });
  });
}

function rotateDirTest(dir) {
  var prop = 'rotate' + dir;

  describe(prop, function() {
    var opts;

    beforeEach(function(done) {
      opts = {};
      done();
    });

    it('should use deg as default unit', function() {
      opts[prop] = 10;
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(10deg)');
    });

    it('should use custom unit', function() {
      opts[prop] = '3rad';
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(3rad)');
    });
  });
}

function skewDirTest(dir) {
  var prop = 'skew' + dir;

  describe(prop, function() {
    var opts;

    beforeEach(function(done) {
      opts = {};
      done();
    });

    it('should use deg as default unit', function() {
      opts[prop] = 10;
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(10deg)');
    });

    it('should use custom unit', function() {
      opts[prop] = '1.07rad';
      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(1.07rad)');
    });
  });
}

function unitLessTest(prop) {
  describe(prop, function() {
    it('should apply the values', function() {
      var opts = {};
      opts[prop] = 2;

      transform(el, opts);
      assert.equal(transform.get(el, 'transform'), prop + '(2)');
    });
  });
}
