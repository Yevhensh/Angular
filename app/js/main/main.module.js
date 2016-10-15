var carsComponent = require('../cars/car.module.js'),
    contactsComponent = require('../contacts/contacts.module.js'),
    studentsComponent = require('../students/students.module.js'),
    schoolsComponent = require('../schools/schools.module.js'),
    mainRoute = require('./main.route'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("app.main", [
  // components
  require('angular-ui-router'),
  carsComponent.name,
  mainComponent.name,
  studentsComponent.name,
  schoolsComponent.name,
  contactsComponent.name,
  mainRoute.name
]);