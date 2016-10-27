var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.request.component',  ['ngMaterial'])
    .component('request', {
        templateUrl: '/app/js/request/components/request.template.html',
        controller: RequestController,
    });
function RequestController($scope) {
  // var ctrl = this;
  $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
}

 
// function RequestController($scope, $window) {
// $scope.sendEmail = function(email, subject, body) {
//     var link = "mailto:"+ "psrs197@webui.ruby"
//              + "?subject=Apply%20to%20join%20PSRS"
//              + "&body=$scope.form"; 

//     window.location.href = link;
//  };

// }