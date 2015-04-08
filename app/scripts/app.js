'use strict';

/**
 * @ngdoc overview
 * @name myWebSiteApp
 * @description
 * # projetVitrineApp
 *
 * Main module of the application.
 */
angular
  .module('myWebSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
