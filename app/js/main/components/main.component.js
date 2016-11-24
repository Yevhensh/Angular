'use strict';

module.exports = angular
  .module('app.main.component', ['ngMaterial', 'naif.base64'])
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
      if($scope.type == 'Teacher'){
        getAttendance();
      }
  };

  $scope.isAuthenticated = isAuth;
  var auth = false;

  function isAuth() {
    if(!auth===Auth.isAuthenticated()) {
      return true;
    }
  }
  function logout() {
    Auth.logout();
  }

  $scope.switchPresence = function(attendance, presence, self){
    Attendance.update( { id: attendance.id }, attendance ).$promise
        .then(function(res){
          var att = res.attendance;
          for(var i=0; i<$scope.attendances.length; i++){
            if ($scope.attendances[i].id == att.id){
              $scope.attendances[i] = att;
              break;
            }
          }
        });
  };
  function getAttendance(){
    Attendance.get(function(data){
      console.log(data);
      $scope.attendances = data.attendances;
      $scope.myDate = new Date(data.attendances[0].time);
    });
  }
  setType();
}
