var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
    //routeProvider is inbuilt service
    $routeProvider
        .when('/',
        {
            controller:'IndexController',
            templateUrl:'app/partials/default.html'

        })
        .when('/about',
        {
            controller:'IndexController',
            templateUrl:'app/partials/about.html'
        })
        .when('/contacts',
        {
            controller:'IndexController',
            templateUrl:'app/partials/contacts.html'
        })
        .when('/customers',
        {
            controller:'CustomerController',
            templateUrl:'app/partials/customers.html'
        })
        .when('/Login',
        {
            controller:'AccountController',
            templateUrl:'app/partials/login.html'
        })
        .when('/UserInfo',
        {
            controller:'AccountController',
            templateUrl:'app/partials/UserInfo.html'
        })
        .when('/register', {
            controller:'AccountController',
            templateUrl:'app/partials/register.html'
        })
        .when('/ResetPassword',{
            controller:'AccountController',
            templateUrl:'app/partials/ResetPassword.html'
        })
        .when('/EditInfo', {
            controller:'AccountController',
            templateUrl:'app/partials/EditInfo.html'
        })
        .when('/logout', {
            controller:'AccountController',
            templateUrl:'app/partials/logout.html'
        })


        .when('/telephone',{
         controller:'ContactController',
        templateUrl:"app/partials/telephone.html"
        })

        .when('/newContact',{
        controller:'ContactController',
            templateUrl:"app/partials/addContact.html"
        })

        .otherwise({redirectTo:'/'});


});