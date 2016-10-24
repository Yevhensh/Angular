var schoolsRoute = require('./schools.route.js'),
    schoolService = require('./services/schools.service.js'),
    schoolListComponent = require('./components/school-list/schoollist.component.js'),
    schoolDetailComponent = require('./components/school-detail/schooldetail.component.js'),
    schoolCreateComponent = require('./components/school-create/schoolcreate.component.js'),
    schoolEditComponent = require('./components/school-edit/schooledit.component.js');

module.exports = angular.module('app.schools', [
    schoolsRoute.name,
    schoolService.name, 
    schoolListComponent.name, 
    schoolDetailComponent.name, 
    schoolCreateComponent.name, 
    schoolEditComponent.name 
]);