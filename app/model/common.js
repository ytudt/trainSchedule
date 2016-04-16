// // 'use strict'
// // (function(angular){
//   angular.module('common',[])
//   .service('CommonService',function($scope){
//     this.serialize=function(form){
//       var str='';
//       var inputList=form.querySelectorAll('input');
//       console.log(inputList.length)
//       for(var i=0;i<inputList.length;i++){
//         console.log(this.name);
//         str+=inputList[i].name+'='+inputList[i].value+'&';
//       }
//       str=str.substring(0,str.length-1);
//       return str;
//     }
//   })
// // })(angular)

angular.module('common',[])
.factory('CommonService',function(){
  return {
    serialize: function (form) {
       var str='';
      var inputList=form.querySelectorAll('input');
      for(var i=0;i<inputList.length;i++){
        str+=inputList[i].name+'='+inputList[i].value+'&';
      }
      str=str.substring(0,str.length-1);
      return str;
      }
  };


})




