'use strict';

module.exports = angular
  .module('app.teacherDetail.component',[])
  .component('teacherDetail', {
    templateUrl: './app/js/teachers/detail/teacher-detail.template.html',
    controller: TeacherDetailController
  });

  TeacherDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'TeacherResource'];

  function TeacherDetailController ($scope, $state, $window, $stateParams, TeacherResource) {
    $scope.teacherDetail = TeacherResource.get({ id: $stateParams.teacherId });

    $scope.deleteTeacher = function(teacherDetail) {
        teacherDetail.$delete({ id: $stateParams.teacherId }, function() {
          $window.location.href = '/teachers';
        });
    };
  }