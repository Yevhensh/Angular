var coreServices  = require('../common/core.services.js');

module.exports = angular
    .module("app.myDay.resource", [
        coreServices.name,
        require('angular-resource')
    ])
    .factory('MyDay', MyDay);

MyDay.$inject = ['$resource','appSettings'];

function MyDay($resource, appSettings){
    return $resource(appSettings.SERVER_PATH + "my_days/:id", null,
        {
            'update':{'method':'PUT'}
        }
    );
}
