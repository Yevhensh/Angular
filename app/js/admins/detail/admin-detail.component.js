'use strict';

module.exports = angular
  .module('app.adminDetail.component',[])
  .component('adminDetail', {
    templateUrl: './app/js/admins/detail/admin-detail.template.html',
    controller: AdminDetailController
  });

  AdminDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'AdminResource'];

  function AdminDetailController ($scope, $state, $window, $stateParams, AdminResource) {
    $scope.adminDetail = AdminResource.get({ id: $stateParams.adminId });

    $scope.deleteAdmin = function(adminDetail) {
        adminDetail.$delete({ id: $stateParams.adminId }, function() {
          $window.location.href = '/admins';
        });
    };
  }
