'use strict';



module.exports = angular
  .module('app.studentcreate.component',['ngMaterial'])
  .component('studentcreate', {
    templateUrl: '/app/js/students/student-create/student-create.template.html',
    controller: StudentCreateController
  });


  StudentCreateController.$inject = ['$scope', '$state',  'Student'];

  function StudentCreateController ($scope, $state,  Student) {
    $scope.student = new Student();

    $scope.addStudent = function() {
      $scope.student.$save(function() {
        $state.go('students');
      });
    };
  }
