export const CapacityDirective = [
  () => ({
    restrict: 'EA',
    scope: {},
    template: `<span>{{::$ctrl.value}} bytes</span>`,
    bindToController: {
      value: '<'
    },
    link($scope) {},
    controller: ['$scope', function($scope) {}],
    controllerAs: '$ctrl'
  })
];
