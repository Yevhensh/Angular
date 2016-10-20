var contactsComponent = require('../contacts/contacts.module.js'),
    studentsComponent = require('../students/students.module.js'),
    schoolsComponent = require('../schools/schools.module.js'),
    albumsModule = require('../albums/albums.module.js'),
    mainRoute = require('./main.route'),
    indexComponent = require('../index/index.module.js'),
    mainComponent = require('./components/main.component.js'),
    levelsComponent = require('../levels/levels.module.js');

module.exports = angular.module("app.main", [
  // modules
  require('angular-ui-router'),
  require('angular-resource'),
  mainComponent.name,
  indexComponent.name,
  studentsComponent.name,
  albumsModule.name,
  schoolsComponent.name,
  contactsComponent.name,
  levelsComponent.name,
  mainRoute.name
]);
