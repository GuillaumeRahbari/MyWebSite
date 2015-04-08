'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('SkillsCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
