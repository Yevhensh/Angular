'use strict';

module.exports = angular
  .module('app.teachercreate.component',[])
  .component('teacherCreate', {
    templateUrl: '/app/js/teachers/create/teacher-create.template.html',
    controller: TeacherCreateController
  });

  TeacherCreateController.$inject = ['$scope', '$state', 'TeacherResource'];

  function TeacherCreateController ($scope, $state, TeacherResource) {
    $scope.teacher = new TeacherResource();

    $scope.addTeacher = function() {
      $scope.teacher.$save(function() {
        $state.go('teachers');
      });
    }
  }