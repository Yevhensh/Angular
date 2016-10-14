'use strict';
var angular = require('angular');

module.exports = angular
  .module('app.schools.component',['ngMaterial'])
  .component('schools', {
    templateUrl: '/app/js/schools/components/schools.template.html',
    controller: SchoolsController,
  });

SchoolsController.$inject =['schoolsResource'];
function SchoolsController(schoolsResource) {
  var ctrl = this;

  schoolsResource.get(function(data){
      ctrl.schools = data.schools;
  });
};
