
angular.module('ppdb.services', [])

.factory('Generate', function () {

  var populateFeaturedPodcast = function (data) {
  	var promise = new Promise(function (resolve, reject) {
  		var len = data.length;
  		var index1 = Math.floor(Math.random()*len);
  		var featured = data[index1];
  		resolve(featured)
  	})

    return promise.then(function (featured) {
      return featured;
    });
  }

  var populateTrendingPodcasts = function (data) {

  	var promise = new Promise(function (resolve, reject) {
  		var len = data.length;
  		var index1 = Math.floor(Math.random()*len);
  		var index2 = Math.floor(Math.random()*len);
  		var index3 = Math.floor(Math.random()*len);
  		var index4 = Math.floor(Math.random()*len);
  		var trends = {
  			first: data[index1],
				second: data[index2],
				third: data[index3],
				forth: data[index4]
  		};
  		resolve(trends)
  	})

    return promise.then(function (trending) {
      return trending;
    });
  }

  return {
    populateTrendingPodcasts: populateTrendingPodcasts,
    populateFeaturedPodcast: populateFeaturedPodcast
  }

})