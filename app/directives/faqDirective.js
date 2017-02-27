'use strict'
angular.module('faqDirective', [])
  .controller('faqController', ['$scope', '$http', function($scope, $http){
    $http({
      method: 'GET',
      url: '/app/data/faq.json'
    }).then(function
    successCallback(response){
      console.log("successCallback is working");
      console.log(response);
      return response;

    }, function errorCallback(response) {
      console.log("errorCallback is working");
      console.log(response);
    });
    $scope.faqAnswer = false;
    $scope.toggle = function() {
      // console.log("am I working?");
      $scope.faqAnswer = !$scope.faqAnswer;
    };

    // $http.get('./app/data/faq.json').then(successCallback, errorCallback);
    //
    // function successCallback(response, status, config, statusText){
    //   console.log("successCallback is working");
    //   console.log(response);
    // }
    //
    // function errorCallback(response, status, config, statusText){
    //   console.log("errorCallback is working");
    //   console.log(response);
    // }

    if($scope.notFound){
      console.log("Not Found");
      //change location
      $location.path("/");
    }
  }])
  .directive('faqD', function(faqDirective) {
    return {
      faq: response,
      templateUrl: 'app/templates/faq-tmpl.html'
    };
  });
  var url = '/app/data/faq.json';
