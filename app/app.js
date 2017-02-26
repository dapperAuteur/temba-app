'use strict';
var temba = angular.module('myApp', [
  //external
  'ui.router',
  'ui.bootstrap',

  //internal
  'dateDirective'
]);
  temba.config(function($stateProvider, $urlRouteProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home-tmpl.html',
        controller: 'HomeCtrl as home'
      })
      .state('budgeting-101', {
        url: '/budgeting-101',
        templateUrl: 'templates/budgeting-101-tmpl.html',
        controller: 'BudgetCtrl as budget'
      })
      .state('real-cost', {
        url: '/real-cost',
        templateUrl: 'templates/real-cost-tmpl.html',
        controller: 'RealCostCtrl as real-cost'
      })
      .state('mission', {
        url: '/mission',
        templateUrl: 'templates/mission-tmpl.html',
        controller: 'MissionCtrl as mission'
      })
      .state('purpose', {
        url: '/purpose',
        templateUrl: 'templates/purpose-tmpl.html',
        controller: 'PurposeCtrl as purpose'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'templates/projects-tmpl.html',
        controller: 'ProjectsCtrl as projects'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'templates/faq-tmpl.html',
        controller: 'FAQCtrl as faq'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'templates/blog-tmpl.html',
        controller: 'BlogCtrl as blog'
      });

    //default routing
    $urlRouteProvider.otherwise('/');
  });

  // angular.module('myApp').controller('MainCtrl', function($scope) {
  //
  // });
