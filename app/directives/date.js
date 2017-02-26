'use strict';
angular.module('dateDirective', [])
  .controller('dateController', ['$scope', function($scope){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $scope.date = {
      currentMonth: monthNames[currentMonth],
      currentDay: dayNames[currentDay],
      currentDayOfMonth: currentDate.getDate(),
      currentYear: currentDate.getFullYear(),
      oneYear: currentDate.getFullYear() + 1,
      fiveYears: currentDate.getFullYear() + 5,
      tenYears: currentDate.getFullYear() + 10
    }
  }])
  .directive('dates', function(){
    return {
      template: '<h1>Today is {{ date.currentDay }}, {{ date.currentMonth }} {{ date.currentDayOfMonth }} of {{ date.currentYear}}</h1>'
    };
  });
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDay();
