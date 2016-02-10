/*!
 * helpers.js
 *
 * Copyright 2016 Achraf Chouk
 * Achraf Chouk (https://github.com/crewstyle)
 */

var grunt = require('grunt'),
    _ = grunt.util._,
    Helpers = {};

//packages requisits for tasks
var requiredTasks = {
  clean: ['grunt-contrib-clean'],
  cssmin: ['grunt-contrib-cssmin'],
  jshint: ['grunt-contrib-jshint'],
  less: ['grunt-contrib-less'],
  uglify: ['grunt-contrib-uglify']
};

//fallbacks
var fallbackTasks = {
  'clean': 'clean:dist'
};

//available tasks
Helpers.filterAvailableTasks = function (tasks){
  tasks = tasks.map(function (taskName){
    var baseName = taskName.split(':')[0],
        reqs = requiredTasks[baseName],
        isAvailable = Helpers.isPackageAvailable(reqs);

    return isAvailable ? taskName : fallbackTasks[taskName];
  });

  return _.flatten(_.compact(tasks));
};

Helpers.isPackageAvailable = function (pkgNames){
  if (!pkgNames) {
    return true;
  }

  if (!_.isArray(pkgNames)) {
    pkgNames = [pkgNames];
  }

  return _.every(pkgNames, function (pkgNames){
    if (!_.isArray(pkgNames)) {
      pkgNames = [pkgNames];
    }

    return _.any(pkgNames, function (pkgName){
      return !!Helpers.pkg.devDependencies[pkgName];
    });
  });
};

module.exports = Helpers;
