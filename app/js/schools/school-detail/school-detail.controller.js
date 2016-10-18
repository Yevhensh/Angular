'use strict';

module.exports = angular
  .module('app.schoolDetail.controller',['ngMaterial'])
  .controller( 'SchoolDetailController', SchoolDetailController);
  SchoolDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'School'];
  function SchoolDetailController ($scope, $state, $window, $stateParams, School) {
    $scope.schoolDetail = School.get({ id: $stateParams.schoolId });
    $scope.deleteSchool = function(schoolDetail) {
        schoolDetail.$delete({ id: $stateParams.schoolId }, function() {
          $window.location.href = '/schools';
        });
    };
  }
