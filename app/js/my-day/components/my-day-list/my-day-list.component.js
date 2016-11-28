'use strict';

module.exports = angular
  .module('app.myDayList.component', [])
  .component('myDayList', {
    templateUrl: './app/js/my-day/components/my-day-list/my-day-list.template.html',
    controller: MyDayController
  });
  MyDayController.$inject = ['MyDay', 'StudentResource'];
    function MyDayController(MyDay, StudentResource) {
      var ctrl = this;

      StudentResource.get(function(data){
        ctrl.students = data.students;
      });

      MyDay.get(function(data){
        ctrl.myDays = data.my_days;
        ctrl.photos = data.photos;
      });

      ctrl.showMyDay = function(studentId) {

        for(var i=0;i<ctrl.myDays.length;i++){
          if(ctrl.myDays[i].student_id == studentId) {
            ctrl.myDay = ctrl.myDays[i];
            ctrl.myDayPhotos = [];
            for(var j=0;j<ctrl.photos.length;j++){
              if(ctrl.photos[j].my_day_id == ctrl.myDay.id) {
                ctrl.myDayPhotos.push(ctrl.photos[j]);
              }
            }
          }
        }

      };

  }
