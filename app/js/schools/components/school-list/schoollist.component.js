'use strict';

module.exports = angular
  .module('app.schoollist.component',[])
  .component('schoollist', {
        controller: SchoolListController,
        templateUrl: '/app/js/schools/components/school-list/school-list.template.html'
    });
  SchoolListController.$inject = ['School', '$scope', '$state'];
  function SchoolListController(School, $scope, $state) {
    School.get(function(data){
      $scope.schools = data.schools;
    });
  }