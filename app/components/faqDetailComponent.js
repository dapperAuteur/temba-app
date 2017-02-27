'use strict'
angular.module('faqComponent', [])
  .component('faqComponent', {
    templateUrl: 'app/templates/faq-tmpl.html',
    controller: function(Question, $http, $location, $rootScope, $scope){

      Question.query(function(data){
        $scope.notFound = true;
        angular.forEach(data, function(question){
          $scope.notFound = false;
          $scope.question = question;
        });
      })

      if($scope.notFound){
        console.log("Not Found");
        //change location
        $location.path("/");
      }
      }
    })


// 'use strict'
// angular.module('faqDirective', [])
//   .component('faqComponent', {
//     templateUrl: 'app/templates/faq-tmpl.html',
//     controller: function(Question, $http, $location, $rootScope, $scope){
//       $scope.goToItem = function(question){
//         console.log("faqController working");
//
//         $rootScope.$apply(function(){
//           $location.path("/" + question.id)
//           console.log("faqController question.id working");
//         })
//       }
//       $scope.items = Question.query();
//     }
//   });
