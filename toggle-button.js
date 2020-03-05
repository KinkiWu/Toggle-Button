(function () {
    'use strict';

    angular
    .module('toggleBtnModule', [])
    .directive('toggleBtn',toggleBtn);


    function toggleBtn() {
        
        var linker = function (scope, element, attr, ngModel) {
            scope.title= scope.text? scope.text: null;
            scope.toggle = function(){
                if(!scope.disable){
                    scope.value = !scope.value;
                    scope.trigger();
                }
            };

            scope.$watch('disable', function () {
                if(scope.disable) scope.value=false;
            },true);

            scope.$on('$destroy', function () {
                element = null;
            });
        };

        var template = '<span ng-click="toggle()">'
                       +    '<input type="checkbox" name="toggleRefresh" class="togglebtn" ng-model="value" ng-disabled="disable">'
                       +    '<label for="toggleRefresh"></label>'
                       +    '<label class="checkbox-text-light" style="padding-left:5px;">{{title}}</label>'
                       +'</span>';

        return {
            restrict: 'E',
            require: 'ngModel',
            template: template,
            scope:{
                value:'=ngModel',
                text:'@?',
                trigger:'&',
                disable:'=?'
            },
            link: linker
        };
    }
    
    
  })();
