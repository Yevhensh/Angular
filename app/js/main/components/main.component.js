'use strict';

module.exports = angular
  .module('app.main.component', ['ngMaterial'])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true
  });

MainController.$inject = ['$scope', 'Auth', 'Type', 'StudentResource', 'Attendance', 'Dailyreport'];
function MainController($scope, Auth, Type, StudentResource, Attendance, Dailyreport){
  // login actions
  $scope.currentNavItem = 'home';
  $scope.googleUrl = 'http://google.com';
  $scope.logout = logout;
  function setType(){
      $scope.type = Type();
  }

  $scope.isAuthenticated = isAuth;
  var auth = false;

  function isAuth() {
    if(!auth===Auth.isAuthenticated()) {
      return true
    }
  }
  function logout() {
    Auth.logout();
  }
  setType();

  $scope.switchPresence = function(attendance, dat){
    Attendance.get({ id: attendance.id }, function(dbAtt){
      dbAtt.attendance.present = dat;
      console.log("report_times" + dbAtt.attendance.report_times);
      $scope.upd = Attendance.update( {id:attendance.id}, dbAtt).$promise
        .then(function(res){
          Attendance.get(function(data){
            console.log("im in attendances");
            $scope.attendances = data;
          })
        });
    })
  };
  // user teacher actions
  $scope.students = StudentResource.get();
  var getCreateDailyReports = function(){
    Dailyreport.save({day: ""}).$promise
        .then(function(res){
          Attendance.get(function(data){
            $scope.attendances = data;
            $scope.myDate = new Date(data.attendances[0].time);
          })
        });
  };

  getCreateDailyReports();
}
