var angular = require('angular');

module.exports = angular.module("core.services",
  ["ngResource"])
  .constant('appSettings',{
      SERVER_PATH: "http://localhost:3000/",
  })
  .constant('messages', {
    NO_AUTH: "Invalid combination of email/password"
  });
