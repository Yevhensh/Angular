'use strict';

module.exports = angular
  .module('app.students. detailController',[])
  .controller('StudentDetailController', StudentDetailController);

StudentDetailController.$inject = ['$scope', '$state', '$window',
                                   '$stateParams', 'StudentResource'];

function StudentDetailController ($scope, $state, $window, $stateParams, StudentResource) {
  $scope.students = StudentResource.get( {id: $stateParams.studentId} );
  $scope.students.$promise.then(function(data) {
    $scope.student = data.student;
  });

  $scope.deleteStudent = function(student) {
    if (confirm("Are you sure \n you want to delete this student?")){
      $scope.students.$delete({ id: $stateParams.studentId }, function() {
        $window.location.href = '/students';
      });
    };
  };
}
