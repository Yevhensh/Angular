var myDayListComponent = require('./components/my-day-list/my-day-list.component.js'),
    myDayCreateComponent = require('./components/my-day-create/my-day-create.component.js'),
    myDayDetailComponent = require('./components/my-day-detail/my-day-detail.component.js'),
    myDayEditComponent = require('./components/my-day-edit/my-day-edit.component.js'),
    myDayService = require('./my-day.service.js'),
    myDayRoute = require('./my-day.route.js');

module.exports = angular.module("app.myDay", [
  myDayListComponent.name,
  myDayCreateComponent.name,
  myDayDetailComponent.name,
  myDayEditComponent.name,
  myDayService.name,
  myDayRoute.name
]);
