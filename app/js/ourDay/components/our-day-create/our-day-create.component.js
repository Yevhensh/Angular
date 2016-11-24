'use strict';

module.exports = angular
  .module('app.ourDayCreate.component', [])
  .component('ourDayCreate', {
    templateUrl: './app/js/ourDay/components/our-day-create/our-day-create.template.html',
    controller: OurDayCreateController
  });
  OurDayCreateController.$inject = ['OurDay', '$scope', '$state'];
    function OurDayCreateController(OurDay, $scope, $state) {
      $scope.ourDay = new OurDay();

      $scope.addOurDay = function() {
        $scope.ourDay.$save(function() {
          $state.go('ourDayList');
        });
      };
  }
