'use strict';

module.exports = angular
  .module('app.ourDayList.component', [])
  .component('ourDayList', {
    templateUrl: './app/js/our-day/components/our-day-list/our-day-list.template.html',
    controller: OurDayController
  });
  OurDayController.$inject = ['OurDay'];
    function OurDayController(OurDay) {
      var ctrl = this;

      OurDay.get(function(data){
        ctrl.ourDay = data.our_days[0];
        ctrl.photos = data.photos;
      });

  }
