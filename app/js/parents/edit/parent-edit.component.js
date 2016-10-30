'use strict';

module.exports = angular
  .module('app.parentEdit.component',[])
  .component('parentEdit', {
    templateUrl: './app/js/parents/edit/parent-edit.template.html',
    controller: ParentEditController
  });

  ParentEditController.$inject = ['$scope', '$state', '$stateParams', 'ParentResource'];
  function ParentEditController ($scope, $state, $stateParams, ParentResource) {
    $scope.updateParent = function() {
      $scope.parentDetail.$update({ id: $stateParams.parentId }, function() {
        $state.go('parents');
      });
    };

   $scope.loadParent = function() {
      $scope.parentDetail = ParentResource.get({ id: $stateParams.parentId });
    };

    $scope.loadParent();
  }
