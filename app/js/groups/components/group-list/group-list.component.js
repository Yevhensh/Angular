'use strict';

module.exports = angular
    .module('app.groupList.component', [])
    .component('groupList', {
        templateUrl: '/app/js/groups/components/group-list/group-list.template.html',
        controller: GroupListController
    });

GroupListController.$inject = ['Group', '$window', '$scope'];

function GroupListController(Group, $window, $scope) {

    var getGroups = function(){
        Group.get(function(data){
            $scope.groups = data.groups;
        });
    };

    $scope.deleteGroup = function (groupId){
        Group.delete({ id: groupId });
        $window.location.href = '/groups'
    };

    $scope.getGroupParams = function (group){
        $scope.students = group.students;
        $scope.teacher = group.teacher;
    };

    $scope.studentNotNull = function () {
        return $scope.students ? true : false;
    };

    getGroups();
}