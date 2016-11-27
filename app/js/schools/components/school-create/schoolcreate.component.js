'use strict';

module.exports = angular
  .module('app.schoolcreate.component',[])
  .component('schoolcreate', {
        controller: SchoolCreateController,
        templateUrl: '/app/js/schools/components/school-create/school-create.template.html'
    });
  SchoolCreateController.$inject = ['$scope', '$state', 'School'];
  function SchoolCreateController ($scope, $state, School) {
    $scope.school = new School();
    $scope.addSchool = function() {
      $scope.school.$save(function() {
        $state.go('schools');
      });
    }
  }