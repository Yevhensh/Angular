'use strict';

module.exports = angular
  .module('app.parentcreate.component',[])
  .component('parentCreate', {
    templateUrl: '/app/js/parents/create/parent-create.template.html',
    controller: ParentCreateController
  });

  ParentCreateController.$inject = ['$scope', '$state', 'ParentResource'];
  function ParentCreateController ($scope, $state, ParentResource) {
    $scope.parent = new ParentResource();
    
    $scope.addParent = function() {
      $scope.parent.$save(function() {
        $state.go('parents');
      });
    }
  }