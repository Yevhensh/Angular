var adminService = require('./services/admin.service.js'),
    adminListController = require('./list/admin-list.controller.js'),
    adminCreateController = require('./create/admin-create.controller.js'),
    adminDetailController = require('./detail/admin-detail.controller.js'),
    adminEditController = require('./edit/admin-edit.controller.js'),
    adminsRoute = require('./admins.route.js');

module.exports = angular.module('app.admins', [
  adminService.name,
  adminEditController.name,
  adminListController.name,
  adminDetailController.name,
  adminCreateController.name,
  adminsRoute.name
]);
