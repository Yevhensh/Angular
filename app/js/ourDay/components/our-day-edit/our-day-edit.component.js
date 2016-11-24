'use strict';

module.exports = angular
  .module('app.ourDayEdit.component', [])
  .component('ourDayEdit', {
    templateUrl: './app/js/ourDay/components/our-day-edit/our-day-edit.template.html',
    controller: OurDayEditController
  });
  OurDayEditController.$inject = ['OurDay', '$scope', '$state', '$stateParams'];
    function OurDayEditController(OurDay, $scope, $state, $stateParams) {
      $scope.updateOurDay = function() {

        $scope.ourDayDetail.$update({ id: $stateParams.ourDayId }, function() {
          $state.go('ourDayList');
        });

      };
      $scope.loadOurDay = function() {
        $scope.ourDayDetail = OurDay.get({ id: $stateParams.ourDayId });
      };
      $scope.loadOurDay();
  }
