const express = require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')


const app = express()
const port = process.env.PORT || 6000

//without middleware: new request->run route handler
//with middleware: new request->do something->run route handler



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log('server is on port' + port)
})

const Task=require('./model/task')
const User=require('./model/user')
const main =async()=>{
//   const task=await Task.findById('')
//   await task.populate('owner').execPopulate()
// console.log(task.owner);
const user=await User.findById('')
await user.populate('tasks').execPopulate()
console.log(user.tasks)
}
main()