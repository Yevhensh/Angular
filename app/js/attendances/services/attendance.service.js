var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.attendance.resource", [
        coreServices.name,
        require('angular-resource')
    ])
    .factory('Attendance', Attendance);

Attendance.$inject = ['$resource','appSettings'];

function Attendance($resource, appSettings){
    return $resource(appSettings.SERVER_PATH + "attendances/:id", null,
        {
            'update':{'method':'PUT'}
        }
    );
}
