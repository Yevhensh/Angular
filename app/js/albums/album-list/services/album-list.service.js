var angular = require('angular');

var coreServices  = require('../../../common/core.services.js');

module.exports = angular
    .module("app.albumList.resource", [
      coreServices.name,
      require('angular-resource')
    ])
    .factory("albumListService", ['$resource','appSettings',
      function albumListService($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + "albums",null);
    }
  ]);
