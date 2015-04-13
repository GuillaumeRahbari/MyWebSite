'use strict';

/**
 * @ngdoc function
 * @name myWebSiteApp.controller:LanguagesCtrl
 * @description
 * # LanguagesCtrl
 * Controller of the myWebSiteApp
 */
angular.module('myWebSiteApp')
  .controller('LanguagesCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
