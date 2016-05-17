
angular.module('ppdb.services', [])

.factory('Generate', function () {

  var populateFeaturedPodcast = function (data) {
  	  	console.log("step 2");
  	var promise = new Promise(function (resolve, reject) {
  		  	console.log("step 3");
  		var len = data.length;
  		var index1 = Math.floor(Math.random()*len);
  		var featured = data[index1];
  		resolve(featured)
  	})

    return promise.then(function (featured) {
    	console.log("step 4")
      return featured;
    });
  }


  var populateTrendingPodcasts = function (data) {
  	  	console.log("step 2");
  	var promise = new Promise(function (resolve, reject) {
  		  	console.log("step 3");
  		var len = data.length;
  		console.log(len)
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
  		console.log(trends)
  		resolve(trends)
  	})

    return promise.then(function (trending) {
    	console.log("step 4")
      return trending;
    });
  }

  // var addLink = function (link) {
  //   console.log(link)
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: link
  //   })
  //   .then(function (resp) {
  //     console.log(resp)
  //     return resp.data;
  //   });
  // }

  return {
    populateTrendingPodcasts: populateTrendingPodcasts,
    populateFeaturedPodcast: populateFeaturedPodcast
  }

})