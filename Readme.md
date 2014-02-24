[![Build Status](https://travis-ci.org/nk-components/dom-transform.png?branch=master)](https://travis-ci.org/nk-components/dom-transform)

# dom-transform

  Applies CSS transform properties on an element

## Installation

  Install with [component(1)](http://component.io):

    $ component install nk-components/dom-transform

## API

    var transform = require('dom-transform');
    transform(document.querySelector('div'), {
      x: 12,
      y: 10
    });

Supported properties:
* `translate`:
  - default: px

* `translate3d`:
  - default: px

* `translateX`:
  - alias: `x`
  - default: px

* `translateY`:
  - alias: `y`
  - default: px

* `translateZ`:
  - alias: `z`
  - default: px

* `scale`

* `scale3d`

* `scaleX`

* `scaleY`

* `scaleZ`

* `rotate3d`

* `rotate`:
  - default: deg

* `rotateX`:
  - default: deg

* `rotateY`:
  - default: deg

* `rotateZ`:
  - default: deg

* `skew`:
  - default: deg

* `skewX`:
  - default: deg

* `skewY`:
  - default: deg

* `matrix`

* `matrix3d`

* `perspective`:
  - default: px

* `origin`

[More information](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
