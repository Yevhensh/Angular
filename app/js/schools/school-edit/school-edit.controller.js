'use strict';

module.exports = angular
  .module('app.schoolEdit.controller',['ngMaterial'])
  .controller( 'SchoolEditController', SchoolEditController);
  SchoolEditController.$inject = ['$scope', '$state', '$stateParams', 'School'];
  function SchoolEditController ($scope, $state, $stateParams, School) {
    $scope.updateSchool = function() {

      $scope.schoolDetail.$update({ id: $stateParams.schoolId }, function() {
        $state.go('schools');
      });
    };
    $scope.loadSchool = function() {
      $scope.schoolDetail = School.get({ id: $stateParams.schoolId });
    };

    $scope.loadSchool();
  }
