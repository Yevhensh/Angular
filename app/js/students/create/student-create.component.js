'use strict';

module.exports = angular
  .module('app.studentcreate.component',[])
  .component('studentCreate', {
    templateUrl: '/app/js/students/create/student-create.template.html',
    controller: StudentCreateController
  });

  StudentCreateController.$inject = ['$scope', '$state',  'StudentResource'];

  function StudentCreateController ($scope, $state,  StudentResource) {
    $scope.student = new StudentResource();

    $scope.addStudent = function() {
      $scope.student.$save(function() {
        $state.go('students');
      });
    };
  }
