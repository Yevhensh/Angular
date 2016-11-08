'use strict';

module.exports = angular
  .module('app.adminEdit.component',[])
  .component('adminEdit', {
    templateUrl: './app/js/admins/edit/admin-edit.template.html',
    controller: AdminEditController
  });

  AdminEditController.$inject = ['$scope', '$state', '$stateParams', 'AdminResource'];
  function AdminEditController ($scope, $state, $stateParams, AdminResource) {
    $scope.updateAdmin = function() {
      $scope.adminDetail.$update({ id: $stateParams.adminId }, function() {
        $state.go('admins');
      });
    };

   $scope.loadAdmin = function() {
      $scope.adminDetail = AdminResource.get({ id: $stateParams.adminId });
    };

    $scope.loadAdmin();
  }
