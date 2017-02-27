'use strict';
angular.module('question').
        factory('Question', function($resource){
                var url = '/app/data/faq.json';
                return $resource(url, {}, {
                  query: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true
                  },
                  get: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true
                  }
                })
        });
