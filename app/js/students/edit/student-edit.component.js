'use strict';

module.exports = angular
  .module('app.studentEdit.component',[])
  .component('studentEdit', {
    templateUrl: './app/js/students/edit/student-edit.template.html',
    controller: StudentEditController
  });

  StudentEditController.$inject = ['$scope', '$state', '$stateParams', 'StudentResource'];
  function StudentEditController ($scope, $state, $stateParams, StudentResource) {
    $scope.updateStudent = function() {
      $scope.studentDetail.$update({ id: $stateParams.studentId }, function() {
        $state.go('students');
      });
    };

   $scope.loadStudent = function() {
      $scope.studentDetail = StudentResource.get({ id: $stateParams.studentId });
    };

    $scope.loadStudent();
  }
