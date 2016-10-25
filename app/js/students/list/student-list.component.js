'use strict';

module.exports = angular
  .module('app.studentList.component',[])
  .component('studentList', {
    templateUrl: '/app/js/students/list/student-list.template.html',
    controller: StudentListController
  });

  StudentListController.$inject =  ['StudentResource','$scope', '$state'];
  function StudentListController(StudentResource, $scope, $state) {
    var ctrl = this;
        ctrl.getStudents = getStudents;

    function getStudents() {
      return StudentResource.get(function(data){
        ctrl.students = data.students;
      });
    }

    getStudents();
  }

