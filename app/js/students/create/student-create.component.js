'use strict';

module.exports = angular
  .module('app.studentCreate.component',[])
  .component('studentCreate', {
    templateUrl: '/app/js/students/create/student-create.template.html',
    controller: StudentCreateController
  });

  StudentCreateController.$inject = ['$scope', '$state', 'StudentResource', 'Group', 'ParentResource'];

  function StudentCreateController ($scope, $state,  StudentResource, Group, ParentResource) {
    $scope.student = new StudentResource();

    Group.get(function(data){
      $scope.groups = data.groups;
    });

    ParentResource.get(function(data){
      $scope.parents = data.parents;
    });

    $scope.addStudent = function() {
        $scope.student.$save(function() {
        $state.go('students');
      });
    }
  }
