'use strict';

module.exports = angular
  .module('app.ourDayDetail.component', [])
  .component('ourDayDetail', {
    templateUrl: './app/js/ourDay/components/our-day-detail/our-day-detail.template.html',
    controller: OurDayDetailController
  });
  OurDayDetailController.$inject = ['$scope', '$window', '$stateParams', 'OurDay'];
  function OurDayDetailController ($scope, $window, $stateParams, OurDay) {
    $scope.ourDayDetail = OurDay.get({ id: $stateParams.ourDayId });
    $scope.deleteOurDay = function(ourDayDetail) {
        ourDayDetail.$delete({ id: $stateParams.ourDayId }, function() {
          $window.location.href = '/our-days';
        });
    };
  }
