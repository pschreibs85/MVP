// 'use strict';

// angular.module('myApp', [
//     'ui.router'
//   ])

//     .config(function($stateProvider, $urlRouterProvider) {
    
//     $urlRouterProvider.otherwise('/');
    
//     $stateProvider
//         .state('home', {
//             url: '/',
//             templateUrl: 'views/main.html',
//             controller: 'MainCtrl'
//         })

//         .state('about', {
//           url: '/about',
//           templateUrl: 'views/about.html',
//           controller: 'AboutCtrl'
//         });
        
// });


angular.module('ppdb', [
  'ppdb.topRated',
  'ppdb.search',
  'ppdb.about',
  'ppdb.contact',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {

  $routeProvider
    .when('/toprated', {
      templateUrl: 'views/topRated.html',
      controller: 'mainController'
    })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'mainController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'mainController'
    })
   .otherwise('/');

})

    
