/**
 * Created by Administrator on 4/12/2015.
 */
myApp.factory('contactFactory', function(){
    var contacts=[];//this users within this factory
    var repository = {};//empty obj
    repository.addContact=function(contact){
        contacts.push(contact);
        console.log(contacts.length);
    };

    repository.getContacts=function(){

        return contacts;

    };

    repository.modifyContact=function(selected, userid){
        for(var i=0;i<contacts.length;i++){
            if(contacts[i].userid=userid){
                for(var j=0;j< contacts[i].details.length;j++){
                    if(contacts[i].details[j].contactid==selected.contactid){
                        contacts[i].details[j]=selected;
                    }
                }
            }
        }


    };

    repository.getContactsLength=function(userid){
        for(var i=0;i<contacts.length;i++){
            if(contacts[i].userid=userid){
               return contacts[i].details.length;
                }
            }
        return 0;
        }




    return repository;
});