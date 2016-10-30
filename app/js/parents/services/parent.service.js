var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module('app.parents.resource', [
      coreServices.name,
      require('angular-resource')
    ])
    .factory('ParentResource', ParentResource);


    ParentResource.$inject = ['$resource','appSettings'];
    function ParentResource($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + 'parents/:id', null,
            {
              'update':{'method':'PUT'}
            }
          );
    }

