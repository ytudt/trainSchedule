angular.module('trainNumber.controller',['common'])
.controller('TrainNumberController',function(CommonService,$scope){
  $scope.submit=function(){
     var trainNumber=document.querySelector('#trainNumber');
     console.log(CommonService.serialize(trainNumber));
     var para=CommonService.serialize(trainNumber);
     var url=`http://apis.baidu.com/qunar/qunar_train_service/traindetail?version=1.0&`+para;
       $.ajax({
    // url:'http://apis.baidu.com/qunar/qunar_train_service/suggestsearch?version=1.0&train=G101&date=2016-04-20',
     url:url,
    type:'get',
    dataType:'json',
    // apikey:'b1a68b8784118e86d6eaa995c6848c78',
    beforeSend: function(request) {
      request.setRequestHeader("apikey", "b1a68b8784118e86d6eaa995c6848c78");
    },
    success:function(data){
      console.log(data);

    },
    error:function(){
        console.log('error')
    }


  });
  }
});
