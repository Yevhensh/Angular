'use strict';

module.exports = angular
  .module('app.ourDayEdit.component', [])
  .component('ourDayEdit', {
    templateUrl: './app/js/our-day/components/our-day-edit/our-day-edit.template.html',
    controller: OurDayEditController
  });
  OurDayEditController.$inject = ['OurDay','$state', '$stateParams'];
    function OurDayEditController(OurDay, $state, $stateParams) {
      var ctrl = this;

      ctrl.updateOurDay = function() {

        ctrl.ourDayDetail.$update({ id: $stateParams.ourDayId }, function() {
          $state.go('ourDayList');
        });

      };
      ctrl.loadOurDay = function() {
        ctrl.ourDayDetail = OurDay.get({ id: $stateParams.ourDayId });
      };
      ctrl.loadOurDay();
  }
