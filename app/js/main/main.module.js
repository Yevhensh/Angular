var carsComponent = require('../cars/car.module.js'),
    contactsComponent = require('../contacts/contacts.module.js'),
    studentsComponent = require('../students/students.module.js'),
    schoolsComponent = require('../schools/schools.module.js'),
    albumListModule = require('../albums/album-list/album-list.module.js'),
    albumDetailModule = require('../albums/album-detail/album-detail.module.js'),
    albumCreateModule = require('../albums/album-create/album-create.module.js'),
    mainRoute = require('./main.route'),
    mainComponent = require('./components/main.component.js');

module.exports = angular.module("app.main", [
  // modules
  require('angular-ui-router'),
  require('angular-resource'),
  carsComponent.name,
  mainComponent.name,
  studentsComponent.name,
  albumCreateModule.name,
  schoolsComponent.name,
  albumListModule.name,
  albumDetailModule.name,
  contactsComponent.name,
  mainRoute.name
]);
