var carsComponent = require('../cars/car.module.js'),
    contactsComponent = require('../contacts/contacts.module.js'),
    studentsComponent = require('../students/students.module.js'),
    schoolsComponent = require('../schools/schools.module.js'),
    loginComponent = require('../login/login.module.js'),
    albumsModule = require('../albums/albums.module.js'),
    mainRoute = require('./main.route'),
    mainComponent = require('./components/main.component.js');

module.exports = angular.module("app.main", [
  // modules
  require('angular-ui-router'),
  require('angular-resource'),
  carsComponent.name,
  mainComponent.name,
  studentsComponent.name,
  albumsModule.name,
  schoolsComponent.name,
  loginComponent.name,
  contactsComponent.name,
  mainRoute.name
]);
