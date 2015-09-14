myApp.service('userService', function($http){
    var users = [];//location variable, not part of service
    this.addUser = function(user){
        users.push(user);
    };
    this.getUsers = function(){
        return users;
    };

});