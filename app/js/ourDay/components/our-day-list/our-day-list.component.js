'use strict';

module.exports = angular
  .module('app.ourDayList.component', [])
  .component('ourDayList', {
    templateUrl: './app/js/ourDay/components/our-day-list/our-day-list.template.html',
    controller: OurDayController
  });
  OurDayController.$inject = ['OurDay', '$scope', '$stateParams'];
    function OurDayController(OurDay, $scope, $stateParams) {
      var ctrl = this;
      
      OurDay.get(function(data){
        ctrl.ourDays = data.our_days;
        ctrl.photos = data.photos;
      });

  }
