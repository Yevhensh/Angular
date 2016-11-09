'use strict';

module.exports = angular
  .module('app.teachercreate.component',[])
  .component('teacherCreate', {
    templateUrl: '/app/js/teachers/create/teacher-create.template.html',
    controller: TeacherCreateController
  });

  TeacherCreateController.$inject = ['$scope', '$state', 'TeacherResource', 'Group'];

  function TeacherCreateController ($scope, $state, TeacherResource, Group) {
    $scope.teacher = new TeacherResource();

    Group.get(function(data){
      $scope.groups = data.groups;
    });

    $scope.addTeacher = function() {
      $scope.teacher.$save(function() {
        $state.go('teachers');
      });
    }
  }