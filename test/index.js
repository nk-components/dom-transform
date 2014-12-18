/*global describe, it, beforeEach */
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
      transform(el, {
        translate: '12px, 50%'
      });
      assert.equal(transform.get(el), 'translate(12px, 50%)');
    });

    it('should append comma', function() {
      transform(el, {
        translate: '12px 50%'
      });
      assert.equal(transform.get(el), 'translate(12px, 50%)');
    });

    it('should use px as default unit', function() {
      transform(el, {
        translate: '1 1'
      });
      assert.equal(transform.get(el), 'translate(1px, 1px)');

      transform(el, {
        translate: '1, 1'
      });
      assert.equal(transform.get(el), 'translate(1px, 1px)');
    });
  });


  describe('translate3d', function() {
    it('should apply the values', function() {
      transform(el, {
        translate3d: '12px, 50%, 3em'
      });
      assert.equal(transform.get(el), 'translate3d(12px, 50%, 3em)');
    });

    it('should append comma', function() {
      transform(el, {
        translate3d: '12px 50% 3em'
      });
      assert.equal(transform.get(el), 'translate3d(12px, 50%, 3em)');
    });

    it('should use px as default unit', function() {
      transform(el, {
        translate3d: '1 1 1'
      });
      assert.equal(transform.get(el), 'translate3d(1px, 1px, 1px)');

      transform(el, {
        translate3d: '1, 1, 1'
      });
      assert.equal(transform.get(el), 'translate3d(1px, 1px, 1px)');
    });
  });


  describe('scale', function() {
    it('should apply the values', function() {
      transform(el, {
        scale: '2, 0.5'
      });
      assert.equal(transform.get(el), 'scale(2, 0.5)');
    });

    it('should append comma', function() {
      transform(el, {
        scale: '2 0.5'
      });
      assert.equal(transform.get(el), 'scale(2, 0.5)');
    });
  });


  describe('scale3d', function() {
    it('should apply the values', function() {
      transform(el, {
        scale3d: '2, 0.5, 0.3'
      });
      assert.equal(transform.get(el), 'scale3d(2, 0.5, 0.3)');
    });

    it('should append comma', function() {
      transform(el, {
        scale3d: '2 0.5 0.3'
      });
      assert.equal(transform.get(el), 'scale3d(2, 0.5, 0.3)');
    });
  });


  unitLessTest('scaleX');
  unitLessTest('scaleY');
  unitLessTest('scaleZ');


  describe('rotate', function() {
    it('should apply the values', function() {
      transform(el, {
        rotate: '0.5turn'
      });
      assert.equal(transform.get(el), 'rotate(0.5turn)');
    });

    it('should use deg as default unit', function() {
      transform(el, {
        rotate: '0.5'
      });
      assert.equal(transform.get(el), 'rotate(0.5deg)');
    });
  });

  describe('rotate3d', function() {
    it('should append comma', function() {
      transform(el, {
        rotate3d: '1.1 2 3 10deg'
      });
      assert.equal(transform.get(el), 'rotate3d(1.1, 2, 3, 10deg)');
    });
  });


  rotateDirTest('X');
  rotateDirTest('Y');
  rotateDirTest('Z');


  describe('skew', function() {
    it('should apply the values', function() {
      transform(el, {
        skew: '30deg, -10deg'
      });
      assert.equal(transform.get(el), 'skew(30deg, -10deg)');

      transform(el, {
        skew: '30deg'
      });
      assert.equal(transform.get(el), 'skew(30deg)');
    });

    it('should use deg as default unit', function() {
      transform(el, {
        skew: '30 -10'
      });
      assert.equal(transform.get(el), 'skew(30deg, -10deg)');

      transform(el, {
        skew: '30'
      });
      assert.equal(transform.get(el), 'skew(30deg)');
    });
  });


  skewDirTest('X');
  skewDirTest('Y');


  describe('perspective', function() {
    it('should use px as default unit', function() {
      transform(el, {
        perspective: 10
      });
      assert.equal(transform.get(el), 'perspective(10px)');
    });

    it('should use custom unit', function() {
      transform(el, {
        perspective: '10px'
      });
      assert.equal(transform.get(el), 'perspective(10px)');
    });
  });


  describe('matrix', function() {
    it('should apply the values', function() {
      transform(el, {
        matrix: '1, 2, 3, 4, 5, 6'
      });
      assert.equal(transform.get(el), 'matrix(1, 2, 3, 4, 5, 6)');
    });

    it('should append comma', function() {
      transform(el, {
        matrix: '1 2 3 4 5 6'
      });
      assert.equal(transform.get(el), 'matrix(1, 2, 3, 4, 5, 6)');
    });
  });


  describe('matrix3d', function() {
    it('should apply the values', function() {
      transform(el, {
        matrix3d: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
      });
      assert.equal(transform.get(el), 'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)');
    });

    it('should append comma', function() {
      transform(el, {
        matrix3d: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16'
      });
      assert.equal(transform.get(el), 'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)');
    });
  });


  describe('none', function() {
    it('should clear', function() {
      transform(el, {
        x: 10
      });
      assert.equal(transform.get(el), 'translateX(10px)');
      transform.none(el);
      assert.equal(transform.get(el), '');
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

    it('should use px as default unit', function() {
      opts[prop] = 10;
      transform(el, opts);
      assert.equal(transform.get(el), prop + '(10px)');
    });

    it('should use custom unit', function() {
      opts[prop] = '3em';
      transform(el, opts);
      assert.equal(transform.get(el), prop + '(3em)');
    });

    it('should works with the shortcut ' + dir.toLowerCase(), function() {
      opts[dir.toLowerCase()] = 10;
      transform(el, opts);
      assert.equal(transform.get(el), prop + '(10px)');
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
      assert.equal(transform.get(el), prop + '(10deg)');
    });

    it('should use custom unit', function() {
      opts[prop] = '3rad';
      transform(el, opts);
      assert.equal(transform.get(el), prop + '(3rad)');
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
      assert.equal(transform.get(el), prop + '(10deg)');
    });

    it('should use custom unit', function() {
      opts[prop] = '1.07rad';
      transform(el, opts);
      assert.equal(transform.get(el), prop + '(1.07rad)');
    });
  });
}


function unitLessTest(prop) {
  describe(prop, function() {
    it('should apply the values', function() {
      var opts = {};
      opts[prop] = 2;

      transform(el, opts);
      assert.equal(transform.get(el), prop + '(2)');
    });
  });
}
