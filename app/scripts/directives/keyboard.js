'use strict';

angular.module('Mathio')
    .directive('appKeyboardDir', function () {
      return {
        restrict: 'E',
        templateUrl: 'templates/application/keyboard.html',
        controller: 'AppKeyboardCtrl'
      };
    });