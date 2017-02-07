var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myCtrl', function($uibModal){
    console.log("myCtrl");
    var vm = this;
    vm.open = function(){
        console.log("clicked open");
        var modalInstance = $uibModal.open({
            templateUrl: 'pop.html',
            controller: 'popCtrl',
            controllerAs: 'vm',
            resolve: {
                login: function(){
                    return "Please enter :";
                }
            }
        });
        modalInstance.result.then(function(user) {
            vm.user = user;
            console.log(vm.user);
            });
    }
});

app.controller('popCtrl', function($uibModalInstance, login){

    console.log('popCtrl-' + login);
    var vm = this;
     vm.user;
     vm.password;
    vm.greet = login;
    vm.submit = function(){
        $uibModalInstance.close(vm.user);}
    vm.cancel = function(){
        $uibModalInstance.dismiss('cancel');
    }

});

/*
 Added to handle an error that occurs on clicking close button on the modal:
 Possibly unhandled rejection: cancel  angular.min.js:122:8
 f/< https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:122:8
 uf/this.$get</< https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:94:42
 g https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:133:147
 Hf/this.$get</m.prototype.$eval https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:147:309
 Hf/this.$get</m.prototype.$digest https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:144:412
 Hf/this.$get</m.prototype.$apply https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:148:76
 Wc[b]</<.compile/</< https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:282:245
 cg https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:38:297
 bg/d https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:38:246
 */
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
