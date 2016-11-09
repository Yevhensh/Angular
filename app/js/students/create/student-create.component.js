'use strict';

module.exports = angular
  .module('app.studentCreate.component',[])
  .component('studentCreate', {
    templateUrl: '/app/js/students/create/student-create.template.html',
    controller: StudentCreateController
  });

  StudentCreateController.$inject = ['$scope', '$state', 'StudentResource', 'Group'];

  function StudentCreateController ($scope, $state,  StudentResource, Group) {
    $scope.student = new StudentResource();

    Group.get(function(data){
      $scope.groups = data.groups;
    });

    $scope.addStudent = function() {
        $scope.student.$save(function() {
        $state.go('students');
      });
    }
  }
