var angular = require('angular');

module.exports = angular.module("core.services",
  ["ngResource"])
  .constant('server_statuses', {
    UNPROCESSABLE_ENTITY: 422,
    NOT_FOUND: 404
  })
  .constant('appSettings',{
      SERVER_PATH: "http://localhost:3000/",
      EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  })
  .constant('messages', {
    NO_AUTH: "Invalid combination of email/password"
  });
