'use strict'
angular.module('iSHelpFormDirective', [])
  .controller('isHelpFormController', ['$scope', function($scope){
    $scope.isForm = false;
    $scope.toggle = function() {
      // console.log("am I working?");
      $scope.isForm = !$scope.isForm;
    };
  }])
  .directive('isHelpForm', function() {
    return {
      templateUrl: 'app/templates/form-tmpl.html'
    };
  });
