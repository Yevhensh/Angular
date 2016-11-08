var angular = require('angular');

module.exports = angular.module("core.services",
  ["ngResource"])
  .constant('appSettings',{
      SERVER_PATH: "http://localhost:3000/",
  });
