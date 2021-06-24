export const DateDirective = [
  () => ({
    restrict: 'EA',
    scope: {},
    template: `<time style="color: #206ea2; text-decoration: underline dashed 1px;" datetime="{{::$ctrl.value}}">{{::$ctrl.value}}</time>`,
    bindToController: {
      value: '<'
    },
    link($scope) {},
    controller: ['$scope', function($scope) {}],
    controllerAs: '$ctrl'
  })
];
