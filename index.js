const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const instadata = require('./data.json');

app.set("view engine","ejs");
app.set("views", path.join(__dirname,'/views'));

app.get('/home',(req,res)=>{
    res.render("home.ejs");
})
app.get('/:username',(req,res)=>{
    let {username }= req.params; 
    let data = instadata[username];
    console.log(data);if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("err.ejs");
    }
    
})


app.listen(port,()=>{
console.log(`app listing on ${port}`);
})