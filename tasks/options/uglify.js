/*!
 * uglify.js
 *
 * Copyright 2016 Achraf Chouk
 * Achraf Chouk (https://github.com/crewstyle)
 */

module.exports = {
  src: {
    files: {
      //including jQuery package
      './dist/slyder.min.js': [
          './bower_components/jquery/dist/jquery.js',
          './slyder.js'
      ],
      //standalone
      './dist/standalone/slyder.min.js': [
          './slyder.js'
      ]
    }
  },

  options: {
    preserveComments: 'some'
  }
};
