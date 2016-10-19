'use strict';

module.exports = angular
  .module('app.schooledit.component',['ngMaterial'])
  .component( 'schooledit', {
        templateUrl: '/app/js/schools/components/school-edit/school-edit.template.html',    
        controller: SchoolEditController
    });
  SchoolEditController.$inject = ['$scope', '$state', '$stateParams', 'School'];
  function SchoolEditController ($scope, $state, $stateParams, School) {
    var ctrl = this;
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

