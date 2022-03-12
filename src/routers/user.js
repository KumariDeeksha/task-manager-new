const express =require('express')
const router=new express.Router()
const User =new express.Router('../model/user')

router.post('/users', async (req, res) => {
    const user = new User(req.body)
   
   try{
     await user.save()
     res.status(201).send(user)
    }catch(e){
     res.status(400).send(e)
   }
  
  })
  
  router.get('/users', async(req, res) => {
  try{
    const user2= await User.find({})
    res.send(user2)
  }catch(e){
    res.status(500).send()
  }
  
    
  
  })
  router.get('/users/:id', async(req, res) => {
    const _id = req.params.id
  try{
    const user= await User.findById(_id)
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  }catch(e){
    res.status(500).send()
  }
  
  })
  router.patch('/users/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedupdates=['name','email','password','age']
    const isvalidoperation=updates.every((updates)=> allowedupdates.includes(updates))
    if(!isvalidoperation){
      return res.status(400).send({error:'invalid updates'})
    }
    try{
       const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}) 
       if(!user){
         return res.status(404).send()
       }
       res.send(user)
    }
    catch(e){
    res.status(500).send(e)  
    }
  })
  
  router.delete('/users/:id',async(req,res)=>{
    try{
       const user=await User.findByIdAndDelete(req.params.id)
       if(!user){
         return res.status(404).send()
       }
       res.send(user)
    }
    catch(e){
      res.status(500).send()
    }
  })
  
 
module.exports=router