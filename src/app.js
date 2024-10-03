const express=require('express');//It is code comming Node.Js
const app=express();//This is the instance of express js application
//You are creating a New Web Server to the application


// app.use('/',(req,res)=>{
//     res.send("Jai shree shyam!")
// })
// app.use('/test/2',(req,res)=>{
//     res.send("Hello dev!")
// })
app.get('/user',(req,res)=>{
    res.send({firstName:"devesh",lastName:"chhabra"})
})
app.post('/user',(req,res)=>{
    res.send("Data successfully saved to database!!!");
})
app.delete("/user",(req,res)=>{
    res.send("deleted from the databases")
})
// app.use('/hello',(req,res)=>{
//         res.send("Jai shree Ram")})
// app.use('/',(req,res)=>{
//     res.send("Nameste DEV")})
app.listen(3000,()=>{
    console.log("Server is SuccessFull....3000")
});
