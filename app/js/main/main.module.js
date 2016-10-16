var carsComponent = require('../cars/car.module.js'),
    contactsComponent = require('../contacts/contacts.module.js'),
    studentsComponent = require('../students/students.module.js'),
    indexComponent = require('../index/index.module.js'),
    schoolsComponent = require('../schools/schools.module.js'),
    loginComponent = require('../login/login.module.js'),
    newsComponent = require('../news/news.module.js'),
    mainRoute = require('./main.route'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("app.main", [
  // components
  require('angular-ui-router'),
  indexComponent.name,
  carsComponent.name,
  mainComponent.name,
  loginComponent.name,
  newsComponent.name,
  studentsComponent.name,
  schoolsComponent.name,
  contactsComponent.name,
  mainRoute.name
]);
