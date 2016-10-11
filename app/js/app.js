var angular = require('angular'),
    mainModule = require('./main/main.module.js');

angular.module('app',
    [
      mainModule.name
    ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
