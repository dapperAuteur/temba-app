'use strict';
angular.module('dateDirective', [])
  .controller('dateController', ['$scope', function($scope){
    $scope.date = {
      currentMonth = currentDate.getMonth()
      currentDay = currentDate.getDay()
      currentYear = currentDate.getFullYear()
      oneYear = currentDate.getFullYear() + 1
      fiveYears = currentDate.getFullYear() + 5
      tenYears = currentDate.getFullYear() + 10
    }
  }])
  .directive('dates', function(){
    this.today = currentDate.getDay();
    return currentDate;
  });
  var currentDate = new Date();
