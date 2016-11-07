var attendancesListComponent = require('./components/attendance-list/attendance-list.component.js'),
    attendancesRoute = require('./attendances.route.js'),
    attendanceResource = require('./services/attendance.service.js');

module.exports = angular.module('app.attendance', [
    attendancesListComponent.name,
    attendancesRoute.name,
    attendanceResource.name
]);
