'use strict';

angular.module('Mathio')
    .controller('HomeCtrl', function($scope) {
      var keyboard = angular.element(document.querySelector('#animatino'));

      //Show custom keyboard for problem solving
      $scope.showKeyboard = function() {
        $scope.animationClass = 'keyboard-shown';
      };

      //Hide custom keyboard
      $scope.hideKeyboard = function() {
        $scope.animationClass = 'keyboard-hidden';
      };
    });