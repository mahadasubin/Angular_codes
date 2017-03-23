 angular.module('app.register', [])

        .directive('datePicker', function() {
            return {
                restrict: 'E',
                require: 'ngModel',
                link : function (scope, element, attrs, registercntrl) {
                    $(function(){
                        element.datepicker({
                            dateFormat:'dd/mm/yyyy',
                            onSelect:function (date) {
                                scope.user.birthday=new Date(date);
                                scope.$apply();
                            }
                        });
                    });
                }
            };
        })
