'use strict'
angular.module('faqDirective', [])
  .component('faqComponent', {
    templateUrl: 'app/templates/faq-tmpl.html',
    controller: function(Question, $location, $rootScope, $scope){
      $scope.goToItem = function(question){
        console.log("faqController working");

        $rootScope.$apply(function(){
          $location.path("/" + question.id)
          console.log("faqController question.id working");
        })
      }
      $scope.items = Question.query();
    }
  });
