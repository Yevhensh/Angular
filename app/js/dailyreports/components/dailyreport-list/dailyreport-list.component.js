var dateFormat = require('dateformat');
'use strict';
module.exports = angular
    .module('app.dailyreportList.component', [])
    .component('dailyreportList', {
        templateUrl: '/app/js/dailyreports/components/dailyreport-list/dailyreport-list.template.html',
        controller: DailyreportListController
    });

DailyreportListController.$inject = ['Dailyreport', '$window', '$scope', 'StudentResource', 'Attendance'];

function DailyreportListController(Dailyreport, $window, $scope, StudentResource, Attendance) {

    var getStudents = function(){
        StudentResource.get(function(data){
            $scope.students = data.students;
            try {
              $scope.getDailyReport(data.students[0].id);
            }
            catch(e){}
        });
    };

    var setDate = function(day){
        $scope.myDate = day;
    };

    var formatDate = function(){
        $scope.formattedDate = dateFormat($scope.myDate, "yyyy-mm-dd");
    };

    $scope.getDailyReport = function(student){
        formatDate();
        Dailyreport.get({id: 1, student_id: student, day: $scope.formattedDate}).$promise
            .then(function(data){
                $scope.daily_report = data.daily_report;
            });
    };

    $scope.sendDailyReport = function(){
        Dailyreport.update({id: 1, sended: true}, null);
        $scope.daily_reports.forEach(function(item){
          item.send = true;
        });
    };

    getStudents();
    setDate(new Date());
}
