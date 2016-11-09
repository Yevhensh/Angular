'use strict';

module.exports = angular
  .module('app.admincreate.component',[])
  .component('adminCreate', {
    templateUrl: '/app/js/admins/create/admin-create.template.html',
    controller: AdminCreateController
  });

  AdminCreateController.$inject = ['$scope', '$state', 'AdminResource', 'School'];

  function AdminCreateController ($scope, $state,  AdminResource, School) {
    $scope.admin = new AdminResource();

    School.get(function(data){
      $scope.schools = data.schools;
    });

    $scope.addAdmin = function() {
      $scope.admin.$save(function() {
        $state.go('admins');
      });
    };

  }
