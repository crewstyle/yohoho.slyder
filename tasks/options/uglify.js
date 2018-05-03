/*!
 * uglify.js
 *
 * Copyright 2016 Achraf Chouk
 * Achraf Chouk (https://github.com/crewstyle)
 */

module.exports = {
  src: {
    files: {
      //including jQuery packages
      './dist/slyder.min.js': [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/jquery.scrollTo/jquery.scrollTo.js',
        './src/js/slyder.js'
      ],
      //including jQuery.scrollTo package only
      './dist/with-jquery.scrollTo/slyder.min.js': [
        './bower_components/jquery.scrollTo/jquery.scrollTo.js',
        './src/js/slyder.js'
      ],
      //standalone
      './dist/standalone/slyder.min.js': [
        './src/js/slyder.js'
      ]
    }
  },

  options: {
    preserveComments: 'some'
  }
};
