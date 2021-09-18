const {name} = require('ejs');
const express = require('express');
const port = 9000;
const db = require('./config/mongoose');
const StudentsList = require('./models/Students');
const app = express();

const path = require('path');
// const req = require('express/lib/request');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.get('/',function(req,res){

    res.send('hii i am there ');
    console.log(req.url);
    return res.render('home');
});
app.get('/response-delete',function(req,res){
    console.log(req.query.id);
    let id = req.query.id;
    StudentsList.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log('error in deletin the elements');
            return ;
        }
        return res.redirect('back');
    });

});
// app.get('/home',function(req,res){

//    // res.send('hii i am there ');
//     //console.log(req.url);
//     return res.render('home');
// });
app.post('/home',function(req,res){
    // res.send('<h1> form is submitted </h1>');
    StudentsList.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        collage: req.body.collage

    },function(err,newStudent){
        if(err){
            console.log('error in storing databases');
             return ;
        };
        
        return console.log('*******',newStudent);
       
    });
    // res.render('response',{
        return res.redirect('back');
    });
    app.get('/home',function(req,res){
        StudentsList.find({},function(err,data){
            if(err){
                console.log('error to fetch data');
              return ;
            }
            return  res.render('home',{
                student_list : data
            });
            //return res.redirect('back');
        });
    });
    // console.log(req.body.password);
    //  res.render('response',{
    //      name:req.body.name,
    //      phone:req.body.phone,
    //      email:req.body.email
    //  });
    // console.log(req.body.name)
    // console.log(req.body.phone);
    // console.log(req.body.email);
    

app.listen(port,function(err){
    if(err){
        console.log('error in running the server ');
        return ;
    }
    return  console.log('server is running successfully '); 
});
