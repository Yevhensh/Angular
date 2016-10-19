'use strict';

module.exports = angular
  .module('app.studentDetail.controller',['ngMaterial'])
  .controller( 'StudentDetailController', StudentDetailController);

  StudentDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'Student'];

  function StudentDetailController ($scope, $state, $window, $stateParams, Student) {
    $scope.studentDetail = Student.get({ id: $stateParams.studentId });

    $scope.deleteStudent = function(studentDetail) {
        studentDetail.$delete({ id: $stateParams.studentId }, function() {
          $window.location.href = '/students';
        });
    };
  }
