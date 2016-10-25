'use strict';

module.exports = angular
  .module('app.studentList.component',['app.studentDetail.component'])
  .component('studentList', {
    templateUrl: '/app/js/students/list/student-list.template.html',
    controller: ['Student','$scope', '$state',
      function StudentListController(Student, $scope, $state) {
        var ctrl = this;
        Student.get(function(data){
          ctrl.students = data.students;
        });
      }]
  });
