'use strict';

module.exports = angular
  .module('app.parentDetail.component',[])
  .component('parentDetail', {
    templateUrl: './app/js/parents/detail/parent-detail.template.html',
    controller: ParentDetailController
  });

  ParentDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'ParentResource'];

  function ParentDetailController ($scope, $state, $window, $stateParams, ParentResource) {
    $scope.parentDetail = ParentResource.get({ id: $stateParams.parentId });

    $scope.deleteParent = function(parentDetail) {
        parentDetail.$delete({ id: $stateParams.parentId }, function() {
          $window.location.href = '/parents';
        });
    };
  }
