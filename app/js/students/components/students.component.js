'use strict';
var angular = require('angular');

module.exports = angular
  .module('app.students.component',['ngMaterial'])
  .component('students', {
    templateUrl: '/app/js/students/components/students.template.html',
    controller: StudentsController,
  });

StudentsController.$inject =['studentsResource'];
function StudentsController(studentsResource) {
  var ctrl = this;

  studentsResource.get(function(data){
      ctrl.students = data.students;
  });
};
