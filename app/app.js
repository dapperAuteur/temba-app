'use strict';
var temba = angular.module('myApp', [
  //external
  'ui.router',
  'ui.bootstrap',

  //internal
  // 'BlogCtrl',
  // 'BudgetCtrl',
  'dateDirective'
  // 'FAQCtrl',
  // 'HomeCtrl',
  // 'MissionCtrl',
  // 'ProjectsCtrl',
  // 'PurposeCtrl',
  // 'RealCostsCtrl'
]);
  temba.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home-tmpl.html',
        controller: 'HomeCtrl as home'
      })
      .state('budgeting-101', {
        url: '/budgeting-101',
        templateUrl: 'app/templates/budgeting-101-tmpl.html',
        controller: 'BudgetCtrl as budget'
      })
      .state('real-costs', {
        url: '/real-costs',
        templateUrl: 'app/templates/real-costs-tmpl.html',
        controller: 'RealCostsCtrl as real-costs'
      })
      .state('mission', {
        url: '/mission',
        templateUrl: 'app/templates/mission-tmpl.html',
        controller: 'MissionCtrl as mission'
      })
      .state('purpose', {
        url: '/purpose',
        templateUrl: 'app/templates/purpose-tmpl.html',
        controller: 'PurposeCtrl as purpose'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/templates/projects-tmpl.html',
        controller: 'ProjectsCtrl as projects'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'app/templates/faq-tmpl.html',
        controller: 'FAQCtrl as faq'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/templates/blog-tmpl.html',
        controller: 'BlogCtrl as blog'
      });

    //default routing
    $urlRouterProvider.otherwise('/');
  });

  // angular.module('myApp').controller('MainCtrl', function($scope) {
  //
  // });
