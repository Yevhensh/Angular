'use strict';

module.exports = angular
  .module('app.studentDetail.component',[])
  .component('studentDetail', {
    templateUrl: './app/js/students/detail/student-detail.template.html',
    controller: StudentDetailController
  });

  StudentDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'Student'];

  function StudentDetailController ($scope, $state, $window, $stateParams, Student) {
    $scope.studentDetail = Student.get({ id: $stateParams.studentId });

    $scope.deleteStudent = function(studentDetail) {
        studentDetail.$delete({ id: $stateParams.studentId }, function() {
          $window.location.href = '/students';
        });
    };
  }