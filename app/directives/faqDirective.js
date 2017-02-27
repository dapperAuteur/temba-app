'use strict'
angular.module('faqDirective', [])
  .controller('faqController', ['$scope', function($scope){
    $scope.isForm = false;
    $scope.toggle = function() {
      // console.log("am I working?");
      $scope.isForm = !$scope.isForm;
    };
  }])
  .directive('faqD', function() {
    return {
      templateUrl: 'app/templates/faq-tmpl.html'
    };
  });
