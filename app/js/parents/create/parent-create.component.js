'use strict';

module.exports = angular
  .module('app.parentcreate.component',[])
  .component('parentCreate', {
    templateUrl: '/app/js/parents/create/parent-create.template.html',
    controller: ParentCreateController
  });

  ParentCreateController.$inject = ['$scope', '$state', 'ParentResource', 'StudentResource'];

  function ParentCreateController ($scope, $state, ParentResource, StudentResource) {
    $scope.parent = new ParentResource();
    
    StudentResource.get(function(data){
      $scope.students = data.students;
    });

    $scope.addParent = function() {
      $scope.parent.$save(function() {
        $state.go('parents');
      });
    }
  }
