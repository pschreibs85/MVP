
angular.module('ppdb.services', [])

.factory('Generate', function ($http) {

  var populateTrendingPodcasts = function (data) {
  	  	console.log("step 2");
  	var promise = new Promise(function (resolve, reject) {
  		  	console.log("step 3");
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
  		}
  		return trends
  	})

    return promise.then(function (trending) {
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
  }

})