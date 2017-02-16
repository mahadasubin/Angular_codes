var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
   $stateProvider
   .state('home',{
       url:'/home',
       templateUrl:"home.html"})
       
    .state('home.list',{
        url:'/list',
        templateUrl:'homelist.html',
        controller: 'homelist'})
        
    .state('home.para',{
        url:'/para',
        template:'<h2>Thank you for visiting our Page<h2>'})
       
    .state('about',{
        url:'/about',
        views:
        {
        '':{templateUrl:'about.html'},
        'c1@about':{template:'<strong>I am in column 1</strong>'},
        'c2@about':{template:'<strong>I am in column 2</strong>'}
        } 
        })
    
    .state('contacts',{
        url:'/contacts',
        templateUrl:'contacts.html',
        controller : 'myController'
       });
    
});


app.controller('homelist',function($scope){
          $scope.Lists=['abcdncjd','vsjcsvdj','cdscjhd','hgdchdw'];
});
 
app.service('resService',function($http){


     this.getRes = function(){
         return $http.get('/contacts');
            
     };
     
     this.postRes = function(data){
         return $http.post('/contacts',data);
     };
        
        this.removeRes = function(id){
         return $http.delete('/contacts/'+id);
     };
     
     this.updateRes = function(id,data){
          return $http.put('/contacts/'+id,data)
     };
     
     this.editRes = function(id){
         return $http.get('/contacts/'+id);
     };
     
}) ;



app.controller('myController',function($scope,resService){
    //$scope.contacts = resService.getRes().data;
    
    var refresh     = function(){
         console.log("getting refreshed");
         resService.getRes().then(function(d) {
         $scope.contacts=d.data;
         console.log(d.data);
         });
        };
        
        refresh();
         
         $scope.addContact = function(){
             resService.postRes($scope.contact);
              refresh();
              $scope.contact="";
         };
         
         $scope.removeContact = function(id){
             resService.removeRes(id).then(function(res){
                console.log(res);
             refresh();
             $scope.contact="";
             });
         };
         
         $scope.editContact = function(id){
             resService.editRes(id).then(function(res){
                console.log("conatact recieved succesfully");
                $scope.contact = res.data;
             });
             
         };
         
         $scope.updateContact = function(id){
             resService.updateRes(id,$scope.contact).then(function(res){
             console.log(res);
             refresh();
             $scope.contact="";
             });
         };
         
         
});
