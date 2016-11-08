'use strict';

module.exports = angular
  .module('app.adminList.component',[])
  .component('adminList', {
    templateUrl: '/app/js/admins/list/admin-list.template.html',
    controller: AdminListController
  });

  AdminListController.$inject =  ['AdminResource','$scope', '$state'];
  function AdminListController(AdminResource, $scope, $state) {
    var ctrl = this;
        ctrl.getAdmins = getAdmins;

    function getAdmins() {
      return AdminResource.get(function(data){
        ctrl.admins = data.admins;
      });
    }

    getAdmins();
  }
