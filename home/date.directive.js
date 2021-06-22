export const DateDirective = [
  () => ({
    restrict: 'EA',
    scope: {},
    template: `<time datetime="{{::$ctrl.value}}">{{::$ctrl.value}}</time>`,
    bindToController: {
      value: '<'
    },
    controller: ['$scope', function($scope) {}],
    controllerAs: '$ctrl',
    link($scope) {}
  })
];
