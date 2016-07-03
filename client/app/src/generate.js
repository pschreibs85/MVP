
angular.module('ppdb.generate', [])

.controller('GenerateController', function ($scope, Generate) {

  $scope.data = {};



	$scope.getPodcasts = function () {
	  Generate.getPodcasts()
	    .then(function (podcasts) {
	    	$scope.data.podcasts = podcasts
	    })
	    .catch(function (error) {
	      console.error(error)
	    })
	}  


  $scope.populateFeaturedPodcast = function () {

    Generate.populateFeaturedPodcast($scope.data.mapped)
	    .then(function (featured) {
	    	$scope.data.featured = featured;
	    })
	    .catch(function (error) {
	      console.error(error)
	    })
  }

  $scope.populateTrendingPodcasts = function () {
    Generate.populateTrendingPodcasts($scope.data.mapped)
	    .then(function (trending) {
	    	$scope.data.trending = trending
	    })
	    .catch(function (error) {
	      console.error(error)
	    })
  }


  $scope.populateFeaturedPodcast()
  $scope.populateTrendingPodcasts();

})