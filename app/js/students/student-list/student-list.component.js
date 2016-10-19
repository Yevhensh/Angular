'use strict';

module.exports = angular
  .module('app.studentList.component',['ngMaterial'])
  .component('studentList', {
    templateUrl: '/app/js/students/student-list/student-list.template.html',
    controller: ['Student','$scope', '$state',
     function StudentListController(Student, $scope, $state) {
       var ctrl = this;
       Student.get(function(data){
           ctrl.students = data.students;
       });
     }]
  });
