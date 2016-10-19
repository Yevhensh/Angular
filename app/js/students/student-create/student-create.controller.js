'use strict';

module.exports = angular
  .module('app.studentCreate.controller',['ngMaterial'])
  .controller( 'StudentCreateController', StudentCreateController);

  StudentCreateController.$inject = ['$scope', '$state',  'Student'];

  function StudentCreateController ($scope, $state,  Student) {
    $scope.student = new Student();

    $scope.addStudent = function() {
      $scope.student.$save(function() {
        $state.go('students');
      });
    };
  }
