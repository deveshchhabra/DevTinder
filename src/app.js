const express=require('express');//It is code comming Node.Js
const app=express();//This is the instance of express js application
//You are creating a New Web Server to the application
app.use('/',(req,res)=>{
    res.send("Nameste DEV")})
app.use('/test',(req,res)=>{
    res.send("Hello From the server~!")
})
app.listen(3000,()=>{
    console.log("Server is SuccessFull....3000")
});
