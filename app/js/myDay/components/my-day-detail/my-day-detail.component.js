'use strict';

module.exports = angular
  .module('app.myDayDetail.component', [])
  .component('myDayDetail', {
    templateUrl: './app/js/myDay/components/my-day-detail/my-day-detail.template.html',
    controller: MyDayDetailController
  });
  MyDayDetailController.$inject = ['$scope', '$window', '$stateParams', 'MyDay', 'StudentResource'];
  function MyDayDetailController ($scope, $window, $stateParams, MyDay, StudentResource) {
    // $scope.myDayDetail = MyDay.get({ id: $stateParams.myDayId });
    // $scope.deleteMyDay = function(myDayDetail) {
    //     myDayDetail.$delete({ id: $stateParams.myDayId }, function() {
    //       $window.location.href = '/my-days';
    //     });
    // };
    var ctrl = this;

    StudentResource.get(function(data){
      ctrl.students = data.students;
    });
    $scope.studentDetail = StudentResource.get({ id: $stateParams.studentId });

  //   $scope.studentDetail = StudentResource.get({ id: $stateParams.studentId });
  //   $scope.myDays = $scope.studentDetail.my_days
  //   $scope.showMyDay = function() {
  //     // $scope.myDayDetail = MyDay.get({ id: $stateParams.myDayId });
  //     $scope.myDate = $scope.myDayDetail.my_day.my_date;
  //   }

  }
