import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

homeModule.directive('bindHtmlCompile', [
  '$compile',
  function($compile) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(
          function() {
            return scope.$eval(attrs.bindHtmlCompile);
          },
          function(value) {
            element.html(value);
            $compile(element.contents())(scope);
          }
        );
      }
    };
  }
]);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

// Directives
import { CapacityDirective, DateDirective } from './directives';
homeModule.directive('mfDate', DateDirective);
homeModule.directive('mfCapacity', CapacityDirective);

export default homeModule;
