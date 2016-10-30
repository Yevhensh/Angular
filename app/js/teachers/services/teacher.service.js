var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module('app.teachers.resource', [
      coreServices.name,
      require('angular-resource')
    ])
    .factory('TeacherResource', TeacherResource);


    TeacherResource.$inject = ['$resource','appSettings'];
    function TeacherResource($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + 'teachers/:id', null,
            {
              'update':{'method':'PUT'}
            }
          );
    }


