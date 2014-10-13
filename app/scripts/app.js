'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Mathio', ['ionic', 'config'])

    .run(function($ionicPlatform, $rootScope, $state, $urlRouter) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
      });
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        //Ionic - Angular Interceptor
      });
    })

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        // setup an abstract state for the tabs directive
          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/application/menu.html'
          })
          .state('app.home', {
            url: '/home',
            views: {
              'homeContent' :{
                templateUrl: 'templates/home/home.html',
                controller: 'HomeCtrl'
              }
            }
          });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/home');

      $httpProvider.interceptors.push(['$q', '$location','$injector', function($q, $location , $injector) {
        return {
          'responseError': function(response) {
            //HTTP Interceptor
            return $q.reject(response);
          }
        };
      }]);
    });

