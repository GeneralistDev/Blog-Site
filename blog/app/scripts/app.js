'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */

(function() {
  angular.module('blogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'btford.markdown'
  ]).config(['$routeProvider', 'markdownConverterProvider', function($routeProvider, markdownConverterProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    markdownConverterProvider.config({
      extensions: ['github']
    });
  }]);
})();
