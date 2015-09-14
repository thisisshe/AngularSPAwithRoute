function ContactController($scope, $rootScope, $location, userFactory,contactFactory){

    $scope.isAddOrEditOrView = {status:false, isAdding: false, isEditing:false, isViewing:false};

$scope.selected={};
    $scope.contacts=contactFactory.getContacts();
    console.log("enter contact controller");
    function init(){
        $scope.users=userFactory.getUsers();
        //get id for the current user
    }

    init();
    $scope.addNew = function(){
        $scope.isAddOrEditOrView.status = true;
        $scope.isAddOrEditOrView.isAdding= true;
    };

    $scope.editContactList=function(selected){
        contactFactory.modifyContact(selected,$scope.users.userid);
    };


    $scope.getUserByName = function(){
        for(i = 0; i < $scope.users.length; i++){
            if($scope.users[i].username ==sessionStorage.username){
                $scope.selectedUser = $scope.users[i];
                return $scope.users[i];
            }
        }
        return null;
    };
    $scope.addContact = function(){
        $scope.selectedUser = $scope.getUserByName(sessionStorage.username);
        console.log("FIRST go to addContact()");
        var newid=contactFactory.getContactsLength($scope.selectedUser.userid)+1;
        $scope.modifyContact.contactid=newid;
        $scope.contact={};
        $scope.contact.id= $scope.selectedUser.userid;
        $scope.contact.details=[];
        console.log("in addContact()");
        $scope.contact.details.push($scope.modifyContact);
        console.log("in addContact name---"+ $scope.modifyContact.name);
        contactFactory.addContact($scope.contact);
        $scope.contacts=contactFactory.getContacts();
        $location.path('/telephone');
    }

    $scope.isEdit = function(){

    }

    $scope.getTemplate = function(contact){
        for(var i=0;i<contact.details.length;i++) {
            if (contact.details[i].contactid === $scope.selected.contactid) return 'edit';
        }

         return 'display';
    }

    $scope.editContact = function( id,contact){

        console.log(id);

            for (var i = 0; i < contact.details.length; i++) {
                if (contact.details[i].contactid === id) {
                    $scope.selected = contact.details[i];
                }
            }
        }








}
myApp.controller('ContactController', ContactController);
