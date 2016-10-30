'use strict';

module.exports = angular
  .module('app.teacherEdit.component',[])
  .component('teacherEdit', {
    templateUrl: './app/js/teachers/edit/teacher-edit.template.html',
    controller: TeacherEditController
  });

  TeacherEditController.$inject = ['$scope', '$state', '$stateParams', 'TeacherResource'];
  function TeacherEditController ($scope, $state, $stateParams, TeacherResource) {
    $scope.updateTeacher = function() {
      $scope.teacherDetail.$update({ id: $stateParams.teacherId }, function() {
        $state.go('teachers');
      });
    };

   $scope.loadTeacher = function() {
      $scope.teacherDetail = TeacherResource.get({ id: $stateParams.teacherId });
    };

    $scope.loadTeacher();
  }
