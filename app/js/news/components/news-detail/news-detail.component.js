'use strict';

module.exports = angular
    .module('app.newsDetail.component', [])
    .component('newsDetail', {
        controller: NewsShowController,
        templateUrl: '/app/js/news/components/news-detail/news-detail.template.html'
    });

NewsShowController.$inject = ['News', '$stateParams'];

function NewsShowController(News, $stateParams) {
    var ctrl = this;
    ctrl.item = News.get({ id: $stateParams.id });
}