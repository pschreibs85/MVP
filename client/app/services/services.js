

angular.module('ppdb.services', [])

.factory('Generate', function ($http) {

  var populateFeaturedPodcast = function (data) {

  	var promise = new Promise(function (resolve, reject) {
  		var index = Math.floor(Math.random()*data.length);
  		var sendMe = data[index];
  		return sendMe
  	})

    return promise.then(function (resp) {
      return resp.data;
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
    populateFeaturedPodcast: populateFeaturedPodcast,
    addLink: addLink
  }

})