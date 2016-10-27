var angular = require('angular');

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.teacherList.resource", [
      coreServices.name,
      require('angular-resource')
    ])
    .factory('Teacher', ['$resource','appSettings',
      function Teacher($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + "teachers/:id", null,
            {
              'update':{'method':'PUT'}
            }
          );
    }
  ]);
