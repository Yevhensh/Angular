'use strict';

module.exports = angular
  .module('app.myDayEdit.component', [])
  .component('myDayEdit', {
    templateUrl: './app/js/myDay/components/my-day-edit/my-day-edit.template.html',
    controller: MyDayEditController
  });
  MyDayEditController.$inject = ['MyDay', '$scope', '$state', '$stateParams'];
    function MyDayEditController(MyDay, $scope, $state, $stateParams) {
      $scope.updateMyDay = function() {

        $scope.myDayDetail.$update({ id: $stateParams.myDayId }, function() {
          $state.go('myDayList');
        });

      };
      $scope.loadMyDay = function() {
        $scope.myDayDetail = MyDay.get({ id: $stateParams.myDayId });
      };
      $scope.loadMyDay();

  }
