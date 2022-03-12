require('../src/db/mongoose')
const Task=require('../src/model/task')

// Task.findByIdAndDelete('622b58d28de57aa5cd021eca').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({complete: false})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount=async(id)=>{
    const task= await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}
deleteTaskAndCount('622b5d148d7f5d0014a8783e').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
