var angular = require('angular'),
    mainModule = require('./main/main.module.js');

angular.module('app',
    [
      mainModule.name,
      require('angular-ui-router'),
      require('angular-material')
    ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});