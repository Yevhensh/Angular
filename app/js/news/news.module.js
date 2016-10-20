var newsListComponent = require('./components/news-list/news-list.component.js'),
    newsShowComponent = require('./components/news-detail/news-detail.component.js'),
    newsNewComponent = require('./components/news-create/news-create.component.js'),
    newsEditComponent = require('./components/news-edit/news-edit.component.js'),
    newsRoute = require('./news.route.js'),
    newsResource = require('./services/news.service.js');

module.exports = angular.module('app.news', [
    newsListComponent.name,
    newsShowComponent.name,
    newsNewComponent.name,
    newsEditComponent.name,
    newsRoute.name,
    newsResource.name
]);
