'use strict';

module.exports = angular
  .module('app.teacherList.component',['ngMaterial'])
  .component('teacherList', {
    templateUrl: '/app/js/teachers/list/teacher-list.template.html',
    controller: TeacherListController
  });

  TeacherListController.$inject =  ['Teacher','$scope', '$state'];
  function TeacherListController(Teacher, $state) {
    var ctrl = this;
        
   
      Teacher.get(function(data){
        ctrl.teachers = data.teachers;
      });
    }
