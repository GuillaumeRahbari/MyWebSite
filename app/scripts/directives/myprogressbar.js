'use strict';

/**
 * @ngdoc directive
 * @name myWebSiteApp.directive:myProgressbar
 * @description
 * # myProgressbar
 */
angular.module('myWebSiteApp')
  .directive('myProgressbar', function () {
    return {
      replace : true,
      link: function (scope, element) {
        element.css('width', '0');

        element.animate({
          width: scope.item.pourcentage + '%'
        },800);
      }
    };
  });
