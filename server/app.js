const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("hello from 1");
    next()
})
app.get('/',(req,res)=>{
    res.send("heloWorld");

})


app.listen(3000,(err)=>{
    if(!err){

  
    console.log('listening at 3000');  }
})
