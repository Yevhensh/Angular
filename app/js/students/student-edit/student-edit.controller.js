'use strict';

module.exports = angular
  .module('app.studentEdit.controller',['ngMaterial'])
  .controller( 'StudentEditController', StudentEditController);

  StudentEditController.$inject = ['$scope', '$state', '$stateParams', 'Student'];

  function StudentEditController ($scope, $state, $stateParams, Student) {
    $scope.updateStudent = function() {
      $scope.studentDetail.$update({ id: $stateParams.studentId }, function() {
        $state.go('students');
      });
    };

   $scope.loadStudent = function() {
      $scope.studentDetail = Student.get({ id: $stateParams.studentId });
    };

    $scope.loadStudent();
  }
