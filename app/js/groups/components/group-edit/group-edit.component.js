'use strict';

module.exports = angular
    .module('app.groupsEdit.component',[])
    .component('groupEdit', {
        templateUrl: '/app/js/groups/components/group-edit/group-edit.template.html',
        controller: GroupEditController
    });

GroupEditController.$inject = ['Group','$scope', '$state', '$stateParams'];

function GroupEditController (Group, $scope, $state, $stateParams) {
    $scope.updateGroup = function() {
        $scope.groupDetail.$update({ id: $stateParams.id }, function() {
            $state.go('groups');
        });
    };

    $scope.loadGroup = function() {
        $scope.groupDetail = Group.get({ id: $stateParams.id });
    };

    $scope.loadGroup();
}