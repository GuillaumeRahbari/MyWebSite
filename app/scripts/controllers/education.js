'use strict';

/**
 * @ngdoc function
 * @name myWebSiteApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the myWebSiteApp
 */
angular.module('myWebSiteApp')
  .controller('EducationCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
