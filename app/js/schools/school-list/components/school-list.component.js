'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.schoolList.component',['ngMaterial'])
  .component('schoolList', {
    templateUrl: '/app/js/schools/school-list/components/school-list.template.html',
    controller: ['School','$scope', '$state',
     function SchoolListController(School, $scope, $state) {
       var ctrl = this;
       School.get(function(data){
           ctrl.schools = data.schools;
       });
     }]
  });
