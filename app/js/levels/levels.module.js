var levelsListComponent = require('./components/level-list/level-list.component.js'),
    levelShowComponent = require('./components/level-detail/level-detail.component.js'),
    levelNewComponent = require('./components/level-create/level-create.component.js'),
    levelEditComponent = require('./components/level-edit/level-edit.component.js'),
    levelsRoute = require('./levels.route.js'),
    levelResource = require('./services/level.service.js');

module.exports = angular.module('app.levels', [
    levelsListComponent.name,
    levelShowComponent.name,
    levelNewComponent.name,
    levelEditComponent.name,
    levelsRoute.name,
    levelResource.name
]);
