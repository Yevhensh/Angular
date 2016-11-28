var ourDayListComponent = require('./components/our-day-list/our-day-list.component.js'),
    ourDayCreateComponent = require('./components/our-day-create/our-day-create.component.js'),
    ourDayDetailComponent = require('./components/our-day-detail/our-day-detail.component.js'),
    ourDayEditComponent = require('./components/our-day-edit/our-day-edit.component.js'),
    ourDayService = require('./our-day.service.js'),
    ourDayRoute = require('./our-day.route.js');

module.exports = angular.module("app.ourDay", [
  ourDayListComponent.name,
  ourDayCreateComponent.name,
  ourDayDetailComponent.name,
  ourDayEditComponent.name,
  ourDayService.name,
  ourDayRoute.name
]);
