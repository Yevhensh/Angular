var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.group.resource", [
        coreServices.name,
        require('angular-resource')
    ])
    .factory('Group', Group);

Group.$inject = ['$resource','appSettings'];

function Group($resource, appSettings){
    return $resource(appSettings.SERVER_PATH + "groups/:id", null,
        {
            'update':{'method':'PUT'}
        }
    );
}
