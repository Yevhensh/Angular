var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.startpage.component',  ['ngMaterial'])
    .component('startpage', {
        templateUrl: '/app/js/startpage/components/startpage.template.html',
        controller: StartpageController,
    });
function StartpageController($scope) {
  var ctrl = this;
}