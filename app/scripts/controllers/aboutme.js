'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:AboutmeCtrl
 * @description
 * # AboutmeCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('AboutmeCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
