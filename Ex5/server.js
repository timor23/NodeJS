const UserController = require('./usersController');

UserController.addNewUser('Jakooz','test4@t.com').then((data)=>{
    console.log("data  :",data)

})


UserController.deleteUserById(3).then((data)=>{
    console.log("data : ",data)
})
UserController.showAllUser().then((data)=>{
    console.log("data  :",data)

})