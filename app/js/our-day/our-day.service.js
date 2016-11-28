
var coreServices  = require('../common/core.services.js');

module.exports = angular
    .module("app.ourDay.resource", [
      coreServices.name,
      require('angular-resource')
    ])
    .factory("OurDay", ['$resource','appSettings',
      function OurDay($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + "our_days/:id", null,
            {
              'update':{'method':'PUT'}
            }
          );
    }
  ]);
