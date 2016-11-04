'use strict';

module.exports = angular
    .module('app.attendanceList.component', [])
    .component('attendanceList', {
        templateUrl: '/app/js/attendances/components/attendance-list/attendance-list.template.html',
        controller: AttendanceListController
    });

AttendanceListController.$inject = ['Attendance', '$window', '$scope'];

function AttendanceListController(Attendance, $window, $scope) {
    var getAttendances = function(){
        Attendance.get(function(data){
            $scope.attendances = data;
        });
    };

    $scope.deleteAttendance = function (attendanceId){
        Attendance.delete({ id: attendanceId });
        getAttendances();
        $window.location.href = '/levels'
    };

    getAttendances();
}