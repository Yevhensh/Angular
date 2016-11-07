var angular = require('angular');

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.request.resource", [
      coreServices.name,
      require('angular-resource')
    ])
    .factory('Request', ['$resource','appSettings',
      function Request($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + "requests/:id", null,
            {
              'update':{'method':'PUT'}
            }
          );
    }
  ]);


