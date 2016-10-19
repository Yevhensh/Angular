var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module('app.studentList.resource', [
      coreServices.name,
      require('angular-resource')
    ])
    .factory('Student', ['$resource','appSettings',
      function Student($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + 'students/:id', null,
            {
              'update':{'method':'PUT'}
            }
          );
    }
  ]);
