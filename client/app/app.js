var Generate = require('./src/generate.js')


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

    
