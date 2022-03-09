const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/taskmanage-api',{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})
.then((res)=>{
    console.log('conneted');
})
.catch((e)=>{ 
    console.log("error");
})




