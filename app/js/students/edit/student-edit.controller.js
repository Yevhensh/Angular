'use strict';

module.exports = angular
  .module('app.studentEdit.component',[])
  .controller('StudentEditController', StudentEditController);

  StudentEditController.$inject = ['$scope', '$state', '$stateParams', 'StudentResource', 'Group'];
  function StudentEditController ($scope, $state, $stateParams, StudentResource, Group) {
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
    $scope.students = StudentResource.get( {id: $stateParams.studentId} );
    $scope.students.$promise.then(function(data) {
      $scope.student = data.student;
    });
  }
