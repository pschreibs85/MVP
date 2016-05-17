// 'use strict';

angular.module('ppdb', [
    'ui.router',
    'ppdb.generate',
    'ppdb.services',
    'ppdb.search',
    'ppdb.autoComplete',
    'ngMaterial',
    // 'ngTouch',
    'ngAnimate',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('toprated', {
      //   url: '/topRated',
      //   templateUrl: 'app/views/topRated.html',
        // controller: 'topRatedController'
      // })
      .state('search', {
        url: '/search',
        templateUrl: 'app/views/search.html',
        controller: 'autoCompleteController'
      });
      // .state('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'mainController'
      // })
      // .state('/contact', {
      //   templateUrl: 'views/contact.html',
      //   controller: 'mainController'
      // })
     $urlRouterProvider.otherwise('/');
   });


//define the application module 
// var app = require('angular').module('ppdb');

/*
when we inject a controller/factory/directive we use the format found below:
    app.factory(), app.directive(), app.controller() etc,.
*/

// app.controller('MainCtrl', require('./src/main.js'));
// app.controller('AboutCtrl', require('./src/about.js'));

// angular.module('ppdb', [
//   'ppdb.generate',
//   'ppdb.services',
//   'ngRoute'
// ])
// .config(function($routeProvider, $httpProvider) {

//   $routeProvider
//     .when('/toprated', {
//       templateUrl: 'views/topRated.html',
//       controller: 'mainController'
//     })
//     .when('/search', {
//       templateUrl: 'views/search.html',
//       controller: 'mainController'
//     })
//     .when('/about', {
//       templateUrl: 'views/about.html',
//       controller: 'mainController'
//     })
//     .when('/contact', {
//       templateUrl: 'views/contact.html',
//       controller: 'mainController'
//     })
//    .otherwise('/');

// })

    
