//this file is not transpiled, so it must use Common JS and ES5

//Register Babel to transpile before our tests run.

require('babel-register')();

// Disable webpack features that Mocha does not understand.
require.extensions['.css'] = function(){};