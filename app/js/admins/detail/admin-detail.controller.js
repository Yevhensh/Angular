'use strict';

module.exports = angular
  .module('app.admins.detail',[])
  .controller('AdminDetailController', AdminDetailController);

  AdminDetailController.$inject = ['$scope', '$window',
                                   '$stateParams', 'AdminResource'];

  function AdminDetailController ($scope, $window, $stateParams, AdminResource) {
    $scope.admins = AdminResource.get({ id: $stateParams.adminId });
    $scope.admins.$promise.then(function(data) {
      $scope.admin = data.user;
    });

    $scope.deleteAdmin = function(admin) {
      if (confirm("Are you sure \n you want to delete this admin?")){
        $scope.admins.$delete({ id: $stateParams.adminId }, function() {
          $window.location.href = '/admins';
        });
      };
    };
  }
