const express = require('express');
const path = require('path');
const instadata = require('./data.json');
const app = express();

 
let port = 8080;
app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname,"/views"));

app.use('/l',(req,res)=>{
    let{q} = req.query;
    if(!q){
        res.send('nothing here');
    }
    res.send(`Hello World ${q}`);
})
app.get('/home',(req,res)=>{ 
    let value =  Math.floor(Math.random()*5) +1  ;
    res.render('home.ejs');
})
// app.get('/:username',(req,res)=>{
//     let {username} = req.params;
//     req.render("")
// })

app.get('/:ig/:username',(req,res)=>{
    let  {username} = req.params;
    const data  = instadata[username]
    console.log( data);
   
    if(data){
         res.render('instagram.ejs',{data });
    }else{
        res.render('err.ejs')
    }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});