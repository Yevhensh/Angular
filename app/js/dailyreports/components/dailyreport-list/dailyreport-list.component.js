'use strict';
module.exports = angular
    .module('app.dailyreportList.component', [])
    .component('dailyreportList', {
        templateUrl: '/app/js/dailyreports/components/dailyreport-list/dailyreport-list.template.html',
        controller: DailyreportListController
    });

DailyreportListController.$inject = ['Dailyreport', '$window', '$scope', 'StudentResource', 'Attendance'];

function DailyreportListController(Dailyreport, $window, $scope, StudentResource, Attendance) {
    $scope.students = StudentResource.get().$promise
        .then(function(data){
            $scope.getStudent(data.students[0].id);
        });

    // var getDailyReports = function(){
    //     Dailyreport.get(function(data){
    //         $scope.dailyreports = data;
    //     });
    // };

    var getStudents = function(){
        StudentResource.get(function(data){
            $scope.students = data.students;
        });
    };

    $scope.getStudent = function(student){
        Dailyreport.get({id: 1, student_id: student}).$promise
            .then(function(data){
                $scope.daily_report = data.daily_report;
            });
    }
    getStudents();
    // getDailyReports();
}