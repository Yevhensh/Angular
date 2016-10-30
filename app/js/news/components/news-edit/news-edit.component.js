'use strict';

module.exports = angular
    .module('app.newsEdit.component',['ngMaterial'])
    .component('newsEdit', {
        templateUrl: '/app/js/news/components/news-edit/news-edit.template.html',
        controller: NewsEditController
    });

    NewsEditController.$inject = ['News','$scope', '$state', '$stateParams'];

    function NewsEditController (News, $scope, $state, $stateParams) {
        $scope.updateNews = function() {
            $scope.newsDetail.$update({ id: $stateParams.id }, function() {
                $state.go('newss');
            });
        };

        $scope.loadNews = function() {
            $scope.newsDetail = News.get({ id: $stateParams.id });
        };

        $scope.types = ["Group","Level","School"];

        $scope.loadNews();
    }