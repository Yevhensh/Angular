var schoolListModule = require('../schools/school-list/school-list.module.js'),
    schoolDetailModule = require('../schools/school-detail/school-detail.module.js'),
    schoolCreateModule = require('../schools/school-create/school-create.module.js'),
    schoolEditModule = require('../schools/school-edit/school-edit.module.js');

module.exports = angular.module("app.school", [
  schoolCreateModule.name,
  schoolEditModule.name,
  schoolListModule.name,
  schoolDetailModule.name,
]);
