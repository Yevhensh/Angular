'use strict';

module.exports = angular
  .module('app.teachercreate.component',[])
  .component('teacherCreate', {
    templateUrl: '/app/js/teachers/create/teacher-create.template.html',
    controller: TeacherCreateController
  });

  TeacherCreateController.$inject = ['$scope', '$state', 'TeacherResource', 'School'];

  function TeacherCreateController ($scope, $state, TeacherResource, School) {
    $scope.teacher = new TeacherResource();

    School.get(function(data){
      $scope.schools = data.schools;
    });

    $scope.addTeacher = function() {
      $scope.teacher.$save(function() {
        $state.go('teachers');
      });
    }
  }