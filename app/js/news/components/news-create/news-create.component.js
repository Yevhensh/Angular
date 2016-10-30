'use strict';

module.exports = angular
    .module('app.newsCreate.component', [])
    .component('newsCreate', {
        controller: NewsCreateController,
        templateUrl: '/app/js/news/components/news-create/news-create.template.html'
    });

NewsCreateController.$inject = ['News', '$state', '$scope', '$stateParams'];

function NewsCreateController(News, $state, $scope, $stateParams) {
    $scope.news = new News();

    $scope.addNews = function(){
        $scope.news.$save(function(){
            $state.go('newss');
        });
    }

    $scope.types = ["Group","Level","School"];
}