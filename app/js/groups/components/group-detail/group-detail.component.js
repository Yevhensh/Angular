'use strict';

module.exports = angular
    .module('app.groupDetail.component', [])
    .component('groupDetail', {
        controller: GroupShowController,
        templateUrl: '/app/js/groups/components/group-detail/group-detail.template.html'
});

GroupShowController.$inject = ['Group', '$stateParams', '$scope'];

function GroupShowController(Group, $stateParams, $scope) {
    $scope.item = Group.get({ id: $stateParams.id });
}