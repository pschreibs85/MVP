
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
    Generate.populateFeaturedPodcast($scope.data)
	    .then(function (featured) {
	    	$scope.data.featured = featured
	    })
	    .catch(function (error) {
	      console.error(error)
	    })
  }

  $scope.populateTrendingPodcasts = function () {
  	console.log("step 1");
    Generate.populateTrendingPodcasts($scope.data)
	    .then(function (trending) {
	    	  	console.log("step 4");
	    	$scope.data.trending = trending
	    })
	    .catch(function (error) {
	      console.error(error)
	    })
  }

  $scope.populateTrendingPodcasts();

})