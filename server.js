var express =require('express');
var app =express();
var bodyParser =require('body-parser')
var db =require('../db')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.jspn())
app.use(express.static("public"));

app.get("/",(req,res,next)=>{
 db.message.find({},function(err,replies){
     if(err)res.send({message:"failed to get reply"})
     res.send(replies);
 })
})
app.post("/",(req,res)=>{
    var message=new db.Message({
        message=req.body.message,
    })
    message.save(function(err,message){
        if(err)res.send({message:"failed to save message"})
        res.send(message);
    })
})
app.listen(5000,() =>{
    console.log("server started at port 5000")
});
