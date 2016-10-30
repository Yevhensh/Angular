var parentService = require('./services/parent.service.js'),
    parentListComponent = require('./list/parent-list.component.js'),
    parentDetailComponent = require('./detail/parent-detail.component.js'),
    parentCreateComponent = require('./create/parent-create.component.js'),
    parentEditComponent = require('./edit/parent-edit.component.js'),
    parentsRoute = require('./parents.route.js');

module.exports = angular.module('app.parents', [
  parentService.name,
  parentCreateComponent.name,
  parentEditComponent.name,
  parentListComponent.name,
  parentDetailComponent.name,
  parentsRoute.name
]);
