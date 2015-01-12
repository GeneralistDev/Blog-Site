'use strict';

(function() {
  var app = angular.module('article-directive', []);

  app.directive('articleCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/article.html'
    };
  });

  app.directive('newArticleForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/new_article.html'
    };
  });

  app.directive('comments', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/comments.html',
      controller: function() {

      },
      controllerAs: 'commentCtrl'
    };
  });
})();
