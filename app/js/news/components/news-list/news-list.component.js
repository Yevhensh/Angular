'use strict';

module.exports = angular
    .module('app.newsList.component', [])
    .component('newsList', {
        templateUrl: '/app/js/news/components/news-list/news-list.template.html',
        controller: NewsListController
    });

    NewsListController.$inject = ['News', '$window', '$scope'];

    function NewsListController(News, $window, $scope) {
        var ctrl = this;
        var getNews = function(){
            News.get(function(data){
                ctrl.news = data.news;
            });
        };


        ctrl.deleteNews = function (newsId){
            News.delete({ id: newsId });
            getNews();
            $window.location.href = '/news'
        };

        getNews();
    }