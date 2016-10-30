'use strict';

module.exports = angular
  .module('app.teacherList.component',[])
  .component('teacherList', {
    templateUrl: '/app/js/teachers/list/teacher-list.template.html',
    controller: TeacherListController
  });

  TeacherListController.$inject =  ['TeacherResource','$scope', '$state'];
  function TeacherListController(TeacherResource, $scope, $state) {
    var ctrl = this;
        ctrl.getTeachers = getTeachers;

    function getTeachers() {
      return TeacherResource.get(function(data){
        ctrl.teachers = data.teachers;
      });
    }

    getTeachers();
  }



