'use strict';

module.exports = angular
  .module('app.studentEdit.component',[])
  .controller('StudentEditController', StudentEditController);

  StudentEditController.$inject = ['$scope', '$state', '$stateParams', 'StudentResource', 'Group', 'ParentResource'];
  function StudentEditController ($scope, $state, $stateParams, StudentResource, Group, ParentResource) {
    if (confirm("Are you sure \nyou want to update this student?")){
      $scope.updateStudent = function() {
        $scope.students.$update({ id: $stateParams.studentId }, function() {
          $state.go('students');
        });
      };
    };
    Group.get(function(data){
      $scope.groups = data.groups;
    });
    ParentResource.get(function(data){
      $scope.parents = data.parents;
    });
    $scope.students = StudentResource.get( {id: $stateParams.studentId} );
    $scope.students.$promise.then(function(data) {
      $scope.student = data.student;
    });
  }
