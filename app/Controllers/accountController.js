function AccountController($scope, $rootScope, $location, userFactory, userService){
    //$scope.users=[{userid:1, username:'admin', password:'admin', email:'admin@gmail.com', mobile:'123'}];
    $rootScope.loginStatus = false;//initiate rootScope in first page &controller
    $rootScope.loggedUsername="";//to display welcome+ username
    $scope.loginUser={};
   // $scope.selectedUser={};//to store new user
    $scope.resetUser={};

    $scope.isAddOrEdit = false;

    function init(){
        $scope.users=userFactory.getUsers();
        //$scope.users=userService.getUsers();
        if(sessionStorage.username!='' && sessionStorage.username!=undefined){
            $rootScope.loginStatus = true;
            $rootScope.loggedUsername=sessionStorage.username;
        }else{
            $rootScope.loginStatus=false;
        }
    }
    init();
    //======register/add user===========
    $scope.addUser = function(){
        var newid=$scope.users.length+1;
        $scope.selectedUser.userid=newid;
        /*
        $scope.selectedUser.username=$scope.txtNameReg;
        $scope.selectedUser.password=$scope.txtPasswordReg;
        $scope.selectedUser.email=$scope.txtEmailReg;
        $scope.selectedUser.mobile=$scope.txtMobileReg;
        */

       // $scope.users.push($scope.selectedUser);
       userFactory.addUser($scope.selectedUser);
        //userService.addUser($scope.selectedUser);
        console.log("in addUser() $scope.users.length ==" +$scope.users.length);
        console.log("in addUser()==selectedUser is " + $scope.selectedUser  );
        console.log("in addUser()==selectedUser username is " + $scope.selectedUser.username  );
        console.log("in addUser() $scope.users[1].username =="+ $scope.users[1].username);
        $scope.selectedUser=null;
        $location.path('/Login');
        console.log("in addUser() $scope.users.length ==" +$scope.users.length);
    };

    //======log in user===========
    $scope.loginUser = function() {
        $scope.loginUser.username=$scope.username;
        $scope.loginUser.password=$scope.password;
        console.log("in loginUser() before for loop $scope.users.length ==" +$scope.users.length);
        for (i = 0; i < $scope.users.length; i++) {
            console.log("in loginUser() $scope.users.length ==" +$scope.users.length);
            console.log("in loginUser() $scope.users[0].username =="+ $scope.users[0].username);
            if ($scope.users[i].username == $scope.loginUser.username
                && $scope.users[i].password == $scope.loginUser.password) {
                $rootScope.loginStatus = true;
                console.log( "in for loop loginStatus is=== "+ $rootScope.loginStatus);
                break;
            }
        }
        console.log( "loginStatus is "+ $rootScope.loginStatus);
        if ($rootScope.loginStatus) {
            $rootScope.loggedUsername = $scope.loginUser.username;
            sessionStorage.username = $scope.loginUser.username;
            $location.path('/UserInfo');
        }else{
            alert("invalid credentials");
        }


    };

    $scope.logOut= function(){
        console.log("in logout()");
        sessionStorage.username='';
        $scope.selectedUser=null;
        $rootScope.loginStatus = false;
        $scope.loginUser = null;
        console.log("in logout()");
        $location.path('/Login');
    };

    //======reset password===========
    $scope.getUserByName = function(){
        for(i = 0; i < $scope.users.length; i++){
            if($scope.users[i].username ==sessionStorage.username){
                $scope.selectedUser = $scope.users[i];
                return $scope.users[i];
            }
        }
        return null;
    };

    $scope.updateUser = function() {
        for (i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].userid == $scope.selectedUser.userid) {
                $scope.users[i] = $scope.selectedUser;
                break;
            }
        }
        $location.path('/UserInfo');
    };


    $scope.resetPassword = function(oldPassword,password1, password2){
        $scope.selectedUser = $scope.getUserByName(sessionStorage.username);
        if($scope.selectedUser.password !=oldPassword){
            alert("wrong password");
        }
        if(password1!=password2){
            alert("the password type twice do not match");
        }else{
            $scope.selectedUser.password = password1;
            $scope.updateUser();
        }

    };
}








myApp.controller('AccountController', AccountController);

