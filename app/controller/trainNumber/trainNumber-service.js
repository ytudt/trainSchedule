
angular.module('getDetail',[])
.factory('TrainNumberService',function($http,$q){
  return{
    getDetail:function(url){
       var deferred = $q.defer();
       var req = {
     method: 'GET',
     url: url,
     headers: {
       "apikey": "b1a68b8784118e86d6eaa995c6848c78"
     },

    }

    $http(req).success(function(data, status, headers, config){
       deferred.resolve(data);
    }).error(function(data, status, headers, config){
      deferred.resolve(data);
    });
     return deferred.promise;
    }
  }

})
