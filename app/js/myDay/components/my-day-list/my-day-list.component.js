'use strict';

module.exports = angular
  .module('app.myDayList.component', [])
  .component('myDayList', {
    templateUrl: './app/js/myDay/components/my-day-list/my-day-list.template.html',
    controller: MyDayController
  });
  MyDayController.$inject = ['MyDay', '$scope', '$stateParams', 'StudentResource'];
    function MyDayController(MyDay, $scope, $stateParams, StudentResource) {
      var ctrl = this;

      StudentResource.get(function(data){
        ctrl.students = data.students;
      });

      MyDay.get(function(data){
        ctrl.myDays = data.my_days;
        ctrl.photos = data.photos;
      });

      $scope.showMyDay = function(studentId) {

        // ctrl.age = ctrl.students[studentId].age;

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
          // else{
          //   document.getElementById("absent").innerHTML = "The student is absent today";
          // }
        }
        // ctrl.studentId = studentId;
      };

      // ctrl.myDayPhotos = [];
      // for(var j=0;j<ctrl.myDay.photo_ids.length;j++){
      //   if(ctrl.photos[j].id == ctrl.myDay.photo_ids[j]) {
      //     ctrl.photos[j].push(ctrl.myDayPhotos);
      //   }
      // }
      // ctrl.id = ctrl.myDay.id;
      // ctrl.myDayPhotos = [];
      // for(var j=0;j<ctrl.photos.length;j++){
      //   if(ctrl.photos[j].my_day_id == ctrl.myDay.id) {
      //     ctrl.myDayPhotos.push(ctrl.photos[j]);
      //   }
      // }




      // ctrl.photos = ctrl.myDayDetail.photos;
      // $scope.myDayDetail = MyDay.get({ id:ctrl.myDay.id });

      // $scope.updateMyDay = function() {
      //
      //   ctrl.myDay.$update;
      //
      // };

  }
