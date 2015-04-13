'use strict';

/**
 * @ngdoc function
 * @name myWebSiteApp.controller:InformationsCtrl
 * @description
 * # InformationsCtrl
 * Controller of the myWebSiteApp
 */
angular.module('myWebSiteApp')
  .controller('InformationsCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
