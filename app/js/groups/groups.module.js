var groupsListComponent = require('./components/group-list/group-list.component.js'),
    groupShowComponent = require('./components/group-detail/group-detail.component.js'),
    groupNewComponent = require('./components/group-create/group-create.component.js'),
    groupEditComponent = require('./components/group-edit/group-edit.component.js'),
    groupsRoute = require('./groups.route.js'),
    groupResource = require('./services/group.service.js');

module.exports = angular.module('app.groups', [
    groupsListComponent.name,
    groupShowComponent.name,
    groupNewComponent.name,
    groupEditComponent.name,
    groupsRoute.name,
    groupResource.name
]);
