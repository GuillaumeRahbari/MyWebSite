'use strict';

/**
 * @ngdoc directive
 * @name myWebSiteApp.directive:myTooltip
 * @description
 * # myTooltip
 */
angular.module('myWebSiteApp')
  .directive('myTooltip', function () {
    return {
      replace: true,
      link: function (scope, element) {
        /* Bootstrap Tooltip for Skillset */
        element.tooltip();
      }
    };
  });
