'use strict';

module.exports = angular
    .module('app.attendanceList.component', [])
    .component('attendanceList', {
        templateUrl: '/app/js/attendances/components/attendance-list/attendance-list.template.html',
        controller: AttendanceListController
    });

AttendanceListController.$inject = ['Attendance', '$window', '$scope', 'StudentResource'];

function AttendanceListController(Attendance, $window, $scope, StudentResource) {
    var ctrl = this;
    $scope.myDate = new Date();

    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());

    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());

    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };


    var getAttendances = function(){
        Attendance.get(function(data){
            $scope.attendances = data.attendances;
        });
    };
    
    getAttendances();
}

