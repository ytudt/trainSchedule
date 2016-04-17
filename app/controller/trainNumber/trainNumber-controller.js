angular.module('trainNumber.controller',['common','getDetail'])
.controller('TrainNumberController',function(CommonService,TrainNumberService,$scope){
  $scope.submit=function(){
     var trainNumber=document.querySelector('#trainNumber');
     var para=CommonService.serialize(trainNumber);
     var url=`http://apis.baidu.com/qunar/qunar_train_service/traindetail?version=1.0&`+para;
       var promise = TrainNumberService.getDetail(url);
       promise.then(function(result){
        $scope.result=result;
        // console.log(result.ret);
        // console.log(result.data.extInfo);
        console.log(result.data.info.head);
        console.log(result.data.info.value);

       },function(){

       }).finally(function(){

       });

  }
});
