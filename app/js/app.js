var angular = require('angular'),
    mainModule = require('./main/main.module.js'),
    css = require('../css/main.scss');
require("../css/main.scss");

angular.module('app',
    [
      mainModule.name,
      require('angular-ui-router'),
      require('angular-material'),
      require('angular-jwt')
    ])
  .config(function($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor')
});
