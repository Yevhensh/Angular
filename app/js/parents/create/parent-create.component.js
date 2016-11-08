'use strict';

module.exports = angular
  .module('app.parentcreate.component',[])
  .component('parentCreate', {
    templateUrl: '/app/js/parents/create/parent-create.template.html',
    controller: ParentCreateController
  });

  ParentCreateController.$inject = ['$scope', '$state', 'ParentResource', 'School'];

  function ParentCreateController ($scope, $state, ParentResource, School) {
    $scope.parent = new ParentResource();
    
    School.get(function(data){
      $scope.schools = data.schools;
    });

    $scope.addParent = function() {
      $scope.parent.$save(function() {
        $state.go('parents');
      });
    }
  }