'use strict';

module.exports = angular
    .module('app.newsCreate.component', ['ui.tinymce'])
    .component('newsCreate', {
        controller: NewsCreateController,
        templateUrl: '/app/js/news/components/news-create/news-create.template.html'
    });

NewsCreateController.$inject = ['News', '$state', '$scope', '$stateParams', 'Group', 'Level', 'School'];

function NewsCreateController(News, $state, $scope, $stateParams, Group, Level, School) {
    $scope.news = new News();

    Group.get(function(data){
      $scope.groups = data.groups;
    });

    Level.get(function(data){
      $scope.levels = data.levels;
    });

    School.get(function(data){
      $scope.school = data.school;
    });

    $scope.addNews = function(){
        $scope.news.$save(function(){
            $state.go('newss');
        });
    }

    $scope.types = ["Group","Level","School"];
}