'use strict';

module.exports = angular
  .module('app.studentEdit.route', [])
  .config(function($stateProvider) {
    var studentUpdate = {
  	  name: 'studentEdit',
  	  url: '/students/{studentId}/edit',
  	  templateUrl: './app/js/students/student-edit/student-edit.template.html',
      controller: 'StudentEditController'
    //     $scope.updateAlbum = function() {
    //
    //       $scope.studentDetail.$update({ id: $stateParams.studentId }, function() {
    //         $state.go('students');
    //       });
    //     };
    //     $scope.loadAlbum = function() {
    //       $scope.studentDetail = Album.get({ id: $stateParams.studentId });
    //     };
    //
    //     $scope.loadAlbum();
    // }]
    };
    $stateProvider.state(studentUpdate);
});
