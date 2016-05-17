
angular.module('ppdb.generate', [])

.controller('GenerateController', function ($scope, $location, Generate) {

  $scope.data = Data.mapppedData;

  $scope.populateFeaturedPodcast = function () {
    Generate.populateFeaturedPodcast($scope.data)
      .then(function (podcast) {
      	console.log(podcast)
        // $location.path('/')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  $scope.populateFeaturedPodcast();

})