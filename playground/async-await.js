const work =async()=>{
    throw new Error('something went wrong')
  return 'deeksha'
}
work().then((result)=>{
    console.log('result',result);
}).catch((e)=>{
    console.log('e',e)
})
