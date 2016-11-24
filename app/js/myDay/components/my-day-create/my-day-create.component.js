'use strict';

module.exports = angular
  .module('app.myDayCreate.component', [])
  .component('myDayCreate', {
    templateUrl: './app/js/myDay/components/my-day-create/my-day-create.template.html',
    controller: MyDayCreateController
  });
  MyDayCreateController.$inject = ['MyDay', '$scope', '$state'];
    function MyDayCreateController(MyDay, $scope, $state) {
      $scope.myDay = new MyDay();

      $scope.addMyDay = function() {
        $scope.myDay.$save(function() {
          $state.go('myDayList');
        });
      };
  }
