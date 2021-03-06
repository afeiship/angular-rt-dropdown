(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxRtDropdown', [function () {
      return {
        restrict: 'E',
        scope: {
          cssClass: '@',
          visible: '@',
          items:'=',
          itemClick:'&'
        },
        template: '<div data-visible="{{visible}}" class="nx-widget-rt-dropdown {{cssClass}}">' +
        '<ul>'+
        '<li ng-repeat="item in items" class="nx-item" ng-click="itemClick()(item)">{{item.text}}</li>'+
        '</ul>'+
        '<b class="arrow">◆</b>'+
        '</div>'
      };

    }]);


})();
