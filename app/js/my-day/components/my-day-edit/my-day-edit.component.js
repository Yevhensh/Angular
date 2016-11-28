'use strict';

module.exports = angular
  .module('app.myDayEdit.component', [])
  .component('myDayEdit', {
    templateUrl: './app/js/my-day/components/my-day-edit/my-day-edit.template.html',
    controller: MyDayEditController
  });
  MyDayEditController.$inject = ['MyDay', '$state', '$stateParams'];
    function MyDayEditController(MyDay, $state, $stateParams) {
      var ctrl = this;
      ctrl.updateMyDay = function() {

        ctrl.myDayDetail.$update({ id: $stateParams.myDayId }, function() {
          $state.go('myDayList');
        });

      };
      ctrl.loadMyDay = function() {
        ctrl.myDayDetail = MyDay.get({ id: $stateParams.myDayId });
      };
      ctrl.loadMyDay();

  }
