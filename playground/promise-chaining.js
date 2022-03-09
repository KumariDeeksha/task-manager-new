require('../src/db/mongoose')
const User=require('../src/model/user')

User.findByIdAndUpdate('61e981b537e327661ce94387',{ age: 1}).then((user)=>{
    console.log(user)
    

return User.countDocuments({ age:1 })
  
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})