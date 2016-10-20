'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.schoollist.component',['ngMaterial'])
  .component('schoollist', {
        controller: SchoolListController,
        templateUrl: '/app/js/schools/components/school-list/school-list.template.html'
    });
  SchoolListController.$inject = ['School', '$scope', '$state'];
   function SchoolListController(School, $state) {
       var ctrl = this;
       School.get(function(data){
           ctrl.schools = data.schools;
       });
     }