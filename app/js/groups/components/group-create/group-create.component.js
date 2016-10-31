'use strict';

module.exports = angular
    .module('app.groupCreate.component', [])
    .component('groupCreate', {
        controller: GroupCreateController,
        templateUrl: '/app/js/groups/components/group-create/group-create.template.html'
    });

GroupCreateController.$inject = ['Group', '$state', '$scope'];

function GroupCreateController(Group, $state, $scope) {
    $scope.group = new Group();

    $scope.addGroup = function(){
        $scope.group.$save(function(){
            $state.go('groups');
        });
    }
}