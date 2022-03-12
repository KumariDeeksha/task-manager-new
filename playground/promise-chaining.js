require('../src/db/mongoose')
const User=require('../src/model/user')

// User.findByIdAndUpdate('61e981b537e327661ce94387',{ age: 1}).then((user)=>{
//     console.log(user)
    

// return User.countDocuments({ age:1 })
  
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateageAndcount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    const count=await User.countDocuments({age})
    return count
}
updateageAndcount('622b5cf58d7f5d0014a8783a',1).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})