'use strict'
angular.module('faqDirective', [])
  .controller('faqController', ['$scope', '$http', function($scope, $http){
    var faqData = this;
    faqData.getQuestion = function(){
      $http({
        method: 'GET',
        url: '/app/data/faq.json'
      }).then(function
      successCallback(response){
        console.log("successCallback is working");
        // console.log(response);
        // console.log(response.data);
        // // console.log(response.data[0]);
        // console.log(response.data[1].question);
         faqData.faqQ = response.data;
        //  console.log(faqData.faqQ[1].question);
         for(var i = 0; i < faqData.faqQ.length; i++){
           console.log(faqData.faqQ[i]);
         }
         console.log(faqData.faqQ.question);

      }, function errorCallback(response) {
        console.log("errorCallback is working");
        console.log(response);
      });
    }
    faqData.getQuestion();
    $scope.faqAnswer = false;
    $scope.toggle = function() {
      // console.log("am I working?");
      $scope.faqAnswer = !$scope.faqAnswer;
    };

    if($scope.notFound){
      console.log("Not Found");
      //change location
      $location.path("/");
    }
  }])
  .directive('faqD', function(faqDirective) {
    return {
      faq: faqQ,
      templateUrl: 'app/templates/faq-tmpl.html'
    };
  });
