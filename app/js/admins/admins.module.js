var adminService = require('./services/admin.service.js'),
    adminListComponent = require('./list/admin-list.component.js'),
    adminCreateComponent = require('./create/admin-create.component.js'),
    adminDetailComponent = require('./detail/admin-detail.component.js'),
    adminEditComponent = require('./edit/admin-edit.component.js'),
    adminsRoute = require('./admins.route.js');

module.exports = angular.module('app.admins', [
  adminService.name,
  adminEditComponent.name,
  adminListComponent.name,
  adminDetailComponent.name,
  adminCreateComponent.name,
  adminsRoute.name
]);
