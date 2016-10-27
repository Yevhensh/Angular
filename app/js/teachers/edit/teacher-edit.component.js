'use strict';

module.exports = angular
  .module('app.teacheredit.component',['ngMaterial'])
  .component('teacheredit', {
    templateUrl: './app/js/teachers/edit/teacher-edit.template.html',
    controller: TeacherEditController
  });

  TeacherEditController.$inject = ['$scope', '$state', '$stateParams', 'Teacher'];
  function TeacherEditController ($scope, $state, $stateParams, Teacher) {
    $scope.updateTeacher = function() {
      var ctrl = this;
      $scope.teacherDetail.$update({ id: $stateParams.teacherId }, function() {
        $state.go('teachers');
      });
    };

   $scope.loadTeacher = function() {
      $scope.teacherDetail = Teacher.get({ id: $stateParams.teacherId });
    };

    $scope.loadTeacher();
  }
