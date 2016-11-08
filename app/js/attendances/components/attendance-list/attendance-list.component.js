'use strict';
module.exports = angular
    .module('app.attendanceList.component', [])
    .component('attendanceList', {
        templateUrl: '/app/js/attendances/components/attendance-list/attendance-list.template.html',
        controller: AttendanceListController
    });

AttendanceListController.$inject = ['Attendance', '$window', '$scope', 'StudentResource'];

function AttendanceListController(Attendance, $window, $scope, StudentResource) {

    $scope.myDate = new Date();
    $scope.students = StudentResource.get();

    $scope.getAttendances = function(){
        Attendance.get(function(data){
                var att = getCurrentAttendances(data.attendances);
                $scope.journal = data.attendances[0].journal_id;
                if(att.length){
                    $scope.attendances = att;
                }
                else {
                    createAttendances();
                }
            });
    };

    // getting attendances on current date
    var getCurrentAttendances = function(attendances){
        var att = [];
        var date = parseCurrentDate();
        for (var i=0; i<attendances.length; i++){
            if(date == attendances[i].time){
                att.push(attendances[i]);
            }
        }
        return att;
    };

    // if there are no attendances for today
    var createAttendances = function(){
        var students = $scope.students.students;
        var date = parseCurrentDate();
        for (var i=0; i<students.length; i++){
            Attendance.save({time: date, present: false, student_id: students[i].id, journal_id: $scope.journal})
                .$promise.then(function(){
                    setCreatedAttendances();
                });
        }
    };

    // setting attendances after creating
    var setCreatedAttendances = function(){
        Attendance.get(function(data){
            $scope.attendances = getCurrentAttendances(data.attendances);
        })
    };

    // getting date in year/mm/dd format
    var parseCurrentDate = function(){
        var year = $scope.myDate.getFullYear();
        var month = $scope.myDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var day = $scope.myDate.getDate();
        if (day < 10){
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    };

    $scope.switchPresence = function(attendance, dat){
        Attendance.get({ id: attendance.id }, function(dbAtt){
            dbAtt.attendance.present = dat;
            Attendance.update( {id:attendance.id}, dbAtt);
            // console.log(attendance);
            // console.log(dat);
        });
        console.log(attendance);
        console.log(dat);
    };

    $scope.getAttendances();
}