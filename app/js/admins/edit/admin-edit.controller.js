'use strict';

module.exports = angular
  .module('app.admins.edit',[])
  .controller('AdminEditController', AdminEditController);

  AdminEditController.$inject = ['$scope', '$state', '$stateParams', 'AdminResource', 'School'];
  function AdminEditController ($scope, $state, $stateParams, AdminResource, School) {
    $scope.admins = AdminResource.get({ id: $stateParams.adminId });
    $scope.admins.$promise.then(function(data) {
      $scope.admin = data.user;
    });


    $scope.updateAdmin = function() {
      if (confirm("Are you sure \nyou want to update this admin?")){
        $scope.admins.$update({ id: $stateParams.adminId }, function() {
          $state.go('admins');
        });
      };
    };
}
