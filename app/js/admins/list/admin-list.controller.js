'use strict';

module.exports = angular
  .module('app.admins.listt',[])
  .controller('AdminListController', AdminListController);

  AdminListController.$inject =  ['AdminResource','$scope'];
  function AdminListController(AdminResource, $scope) {
    AdminResource.get(function(data){
      $scope.admins = data.admins;
    });
  }
