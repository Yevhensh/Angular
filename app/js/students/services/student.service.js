var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module('app.students.resource', [
      coreServices.name,
      require('angular-resource')
    ])
    .factory('StudentResource', StudentResource);


    StudentResource.$inject = ['$resource','appSettings'];
    function StudentResource($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + 'students/:id', null,
            {
              'update':{'method':'PUT'}
            }
          );
    }

