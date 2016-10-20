var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.news.resource", [
        coreServices.name,
        require('angular-resource')
    ])
    .factory('News', News);

    News.$inject = ['$resource','appSettings'];

    function News($resource, appSettings){
        return $resource(appSettings.SERVER_PATH + "news/:id", null,
            {
                'update':{'method':'PUT'}
            }
        );
    }
