'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('SkillsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('assets/json/skills.json')
      .success(function(data) {
        $scope.skills = data;
      })
      .error(function(error) {
        console.log(error);
      });
  }]);
