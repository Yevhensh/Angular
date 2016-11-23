var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.dailyreport.resource", [
        coreServices.name,
        require('angular-resource')
    ])
    .factory('Dailyreport', Dailyreport);

Dailyreport.$inject = ['$resource','appSettings'];

function Dailyreport($resource, appSettings){
    return $resource(appSettings.SERVER_PATH + "daily_reports/:id?student_id", null,
        {
            'update':{'method':'PUT'}
        }
    );
}
