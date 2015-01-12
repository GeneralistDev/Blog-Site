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
        this.newComment = {
          name: '',
          email: '',
          body: ''
        };

        this.submitComment = function(article) {
          if (this.newComment.name === '') {
            this.newComment.name = 'Anonymous';
          }
          this.newComment.timestamp = Date.now();
          article.comments.push(this.newComment);
          this.newComment = {
            name: '',
            email: '',
            body: ''
          };
        };
      },
      controllerAs: 'commentCtrl'
    };
  });
})();
