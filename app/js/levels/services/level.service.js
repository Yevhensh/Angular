var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.level.resource", [
        coreServices.name,
        require('angular-resource')
    ])
    .factory('Level', Level);

    Level.$inject = ['$resource','appSettings'];

    function Level($resource, appSettings){
        return $resource(appSettings.SERVER_PATH + "levels/:id", null,
            {
                'update':{'method':'PUT'}
            }
        );
    }
