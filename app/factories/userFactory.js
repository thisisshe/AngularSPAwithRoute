myApp.factory('userFactory', function(){
    var users=[{userid:1, username:'admin', password:'admin', email:'admin@gmail.com', mobile:'123'}];//this users within this factory
    var repository = {};//empty obj
    repository.addUser=function(user){
        users.push(user);
    };

    repository.getUsers=function(){

        return users;
    };
    repository.getLength=function(){

        return users.length;
    };
    return repository;
});