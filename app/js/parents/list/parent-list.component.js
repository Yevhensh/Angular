'use strict';

module.exports = angular
  .module('app.parentList.component',[])
  .component('parentList', {
    templateUrl: '/app/js/parents/list/parent-list.template.html',
    controller: ParentListController
  });

  ParentListController.$inject =  ['ParentResource','$scope', '$state'];
  function ParentListController(ParentResource, $scope, $state) {
    var ctrl = this;
        ctrl.getParents = getParents;

    function getParents() {
      return ParentResource.get(function(data){
        ctrl.parents = data.parents;
      });
    }

    getParents();
  }

