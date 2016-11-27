'use strict';

module.exports = angular
    .module('app.newsDetail.component', [])
    .component('newsDetail', {
        controller: NewsShowController,
        templateUrl: '/app/js/news/components/news-detail/news-detail.template.html'
    });

NewsShowController.$inject = ['News', '$stateParams', '$scope'];

function NewsShowController(News, $stateParams, $scope) {
    $scope.newsDetail = News.get({ id: $stateParams.id });
}