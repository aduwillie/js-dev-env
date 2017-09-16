require('babel-register')();

require.extensions['.css'] = function() {}; // Disable webpack features that mocha doesn't understand
