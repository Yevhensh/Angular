'use strict';
module.exports = angular
    .module('app.dailyreportList.component', [])
    .component('dailyreportList', {
        templateUrl: '/app/js/dailyreports/components/dailyreport-list/dailyreport-list.template.html',
        controller: DailyreportListController
    });

DailyreportListController.$inject = ['Dailyreport', '$window', '$scope', 'StudentResource', 'Attendance'];

function DailyreportListController(Dailyreport, $window, $scope, StudentResource, Attendance) {
    $scope.students = StudentResource.get();

    var getAttend = function(){
        Attendance.get(function(data){
            $scope.attendances = data;
            $scope.myDate = new Date(data.attendances[0].time);
        }).$promise.then(function(res){
            StudentResource.get(function(data){
               $scope.students = data.students;
            });
            //     .$promise.then(function(res){
            //     $scope.getCurrentAttendance($scope.students[0].id)
            // });
        })
    };

    getAttend();

    // Dailyreport.get(function(data){
    //
    // })
}