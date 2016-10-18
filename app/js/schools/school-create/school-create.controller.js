'use strict';

module.exports = angular
  .module('app.schoolCreate.controller',['ngMaterial'])
  .controller( 'SchoolCreateController', SchoolCreateController);
  SchoolCreateController.$inject = ['$scope', '$state', 'School'];
  function SchoolCreateController ($scope, $state, School) {
    $scope.school = new School();

    $scope.addSchool = function() {
      $scope.school.$save(function() {
        $state.go('schools');
      });
    };
  };
