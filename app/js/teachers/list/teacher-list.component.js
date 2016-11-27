'use strict';

module.exports = angular
  .module('app.teacherList.component',[])
  .component('teacherList', {
    templateUrl: '/app/js/teachers/list/teacher-list.template.html',
    controller: TeacherListController
  });

  TeacherListController.$inject =  ['TeacherResource','$scope', '$state'];
  function TeacherListController(TeacherResource, $scope, $state) {
    TeacherResource.get(function(data){
      $scope.teachers = data.teachers;
    });
  }