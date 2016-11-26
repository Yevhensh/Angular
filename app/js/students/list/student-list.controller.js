'use strict';

module.exports = angular
  .module('app.students.listController',[])
  .controller('StudentListController', StudentListController);

  StudentListController.$inject =  ['StudentResource','$scope', '$state'];
  function StudentListController(StudentResource, $scope, $state) {
    StudentResource.get(function(data){
      $scope.students = data.students;
    });
  }
