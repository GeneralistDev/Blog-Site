'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */

(function() {
  var app = angular.module('blogApp');

  app.controller('MainCtrl', function($scope) {
    this.articles = [{
      title: 'Things I\'ve done this month',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius faucibus dui, ac eleifend nibh vulputate ut. Proin sit amet tincidunt ex. Maecenas tempor ultrices dapibus. Vestibulum vehicula lectus non elit hendrerit sagittis. In lobortis lacus ligula. Aenean iaculis lobortis luctus. Phasellus iaculis justo a varius semper. Aenean imperdiet libero ut turpis vehicula accumsan. Nunc vitae sapien efficitur, venenatis est ut, gravida diam. Nam et cursus erat, sit amet placerat urna. Cras vel placerat urna. Aenean ut efficitur elit. Sed sed ipsum egestas, porta orci posuere, ullamcorper eros. Etiam pellentesque tristique tortor condimentum facilisis. Pellentesque lacinia ligula vitae augue bibendum posuere. Sed pulvinar sit amet felis et tristique.\n\n' +
        'Aliquam rhoncus erat in sapien ultricies elementum. Fusce interdum velit sed placerat tristique. Pellentesque augue lacus, pharetra id dictum eu, auctor ac orci. Morbi velit sem, commodo ac euismod vitae, scelerisque vel erat. Nam justo neque, malesuada sed quam aliquet, tincidunt malesuada orci. In id tellus dignissim, gravida ex sit amet, tristique leo. Nunc convallis metus vitae dui pharetra, eu fringilla augue fringilla. Fusce suscipit odio ut velit euismod, non maximus erat feugiat. Nulla ut ex sit amet leo tempus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dolor sed lacus dapibus efficitur. Vestibulum sed pellentesque tellus. Donec nec ipsum non dui tincidunt sodales.',
      comments: [{
        name: 'Dale Salter',
        email: 'compulsed@gmail.com',
        body: 'I really like your new blog, you should make me one too.'
      }]
    }, {
      title: 'A new blog has arrived!!',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius faucibus dui, ac eleifend nibh vulputate ut. Proin sit amet tincidunt ex. Maecenas tempor ultrices dapibus. Vestibulum vehicula lectus non elit hendrerit sagittis. In lobortis lacus ligula. Aenean iaculis lobortis luctus. Phasellus iaculis justo a varius semper. Aenean imperdiet libero ut turpis vehicula accumsan. Nunc vitae sapien efficitur, venenatis est ut, gravida diam. Nam et cursus erat, sit amet placerat urna. Cras vel placerat urna. Aenean ut efficitur elit. Sed sed ipsum egestas, porta orci posuere, ullamcorper eros. Etiam pellentesque tristique tortor condimentum facilisis. Pellentesque lacinia ligula vitae augue bibendum posuere. Sed pulvinar sit amet felis et tristique.\n\n' +
        'Aliquam rhoncus erat in sapien ultricies elementum. Fusce interdum velit sed placerat tristique. Pellentesque augue lacus, pharetra id dictum eu, auctor ac orci. Morbi velit sem, commodo ac euismod vitae, scelerisque vel erat. Nam justo neque, malesuada sed quam aliquet, tincidunt malesuada orci. In id tellus dignissim, gravida ex sit amet, tristique leo. Nunc convallis metus vitae dui pharetra, eu fringilla augue fringilla. Fusce suscipit odio ut velit euismod, non maximus erat feugiat. Nulla ut ex sit amet leo tempus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dolor sed lacus dapibus efficitur. Vestibulum sed pellentesque tellus. Donec nec ipsum non dui tincidunt sodales.',
      comments: []
    }];

    this.newPostFormVisible = true;

    this.livePreview = {
      title: '',
      body: '',
      comments: []
    };

    this.createArticle = function() {
      this.articles.push(this.livePreview);
      this.livePreview = {
        title: '',
        body: '',
        comments: []
      };
    };

    this.clear = function() {
      $scope.articleForm.$setPristine();
      this.livePreview = {
        title: '',
        body: '',
        comments: []
      };
    };
  });

})();
