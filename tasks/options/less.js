/*!
 * less.js
 *
 * Copyright 2016 Achraf Chouk
 * Achraf Chouk (https://github.com/crewstyle)
 */

module.exports = {
  src: {
    options: {
      modifyVars: {
        white: '#ffffff',
        black: '#000000'
      },
      optimization: 2
    },

    files: {
      './dist/css/slyder.css': [
        './slyder.less'
      ]
    }
  }
};
