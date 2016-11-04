var attendancesListComponent = require('./components/attendance-list/attendance-list.component.js'),
    attendanceShowComponent = require('./components/attendance-detail/attendance-detail.component.js'),
    attendanceNewComponent = require('./components/attendance-create/attendance-create.component.js'),
    attendanceEditComponent = require('./components/attendance-edit/attendance-edit.component.js'),
    attendancesRoute = require('./attendances.route.js'),
    attendanceResource = require('./services/attendance.service.js');

module.exports = angular.module('app.attendance', [
    attendancesListComponent.name,
    attendancesRoute.name,
    attendanceResource.name
    // levelEditComponent.name,
    // levelsRoute.name,
    // levelResource.name
]);
