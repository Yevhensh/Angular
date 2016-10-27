'use strict';

module.exports = angular
  .module('app.teacherCreate.component',['ngMaterial'])
  .component('teacherCreate', {
    templateUrl: '/app/js/teachers/create/teacher-create.template.html',
    controller: TeacherCreateController
  });

  TeacherCreateController.$inject = ['$scope', '$state',  'Teacher'];

  function TeacherCreateController ($scope, $state,  Teacher) {
    var ctrl = this;
    $scope.teacher = new Teacher();

    $scope.addTeacher = function() {
      $scope.teacher.$save(function() {
        $state.go('teachers');
      });
    }
  }
