const express = require('express');
var passport=require('passport');
var mysql = require('mysql');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
var cors = require('cors');
const jwt = require('jsonwebtoken');
//bcrypt and salt
const bcrypt = require('bcrypt');
var saltRounds=8;


//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//passport.js
//require('./passport')(passport);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//cors (cross origin resource sharing)
app.use(cors());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'rohan',
    password: 'chaliyan',
    database: 'mobile'
});
 
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });
 
 
  function verifyToken(req,res,next){
    const bearerHeader =req.headers['authorization'];
    //check if undefined
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
}


//signup 
app.post('/api/signup',function(req,res){
  let response= req.body;
  console.log(response);
  let myPlaintextPassword=response.password;
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    let sql =`INSERT INTO user(uname,password,uemail) VALUES (?,?,?)`;
    let creds=[response.uname,hash,response.email];
    connection.query(sql, creds, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.json(results);
      });
  });
});

//login
app.post('/api/login',function(req,res){
  let response= req.body;
  let sql = `SELECT * FROM user where uname=?`;
  var arr=[response.uname];
  connection.query(sql,arr,(error, results, fields) => {
   if (error) {
     return console.error(error.message);
   }
   if (typeof results !== 'undefined' && results.length > 0) {
     // the array is defined and has at least one element
     var user={
       id:results[0].userid,
       name:results[0].uname
     }; 
     bcrypt.compare(response.password,results[0].password,function(err,isMatch){
         if(err)
             throw err;
         if(isMatch){
           jwt.sign({user},"mysecretkey",{expiresIn:'3600s'},function(err,token){
             console.log(token);
             return res.json({ token });
           });    
         } else{
           console.log("No password match");
         }
     });
 }
 });
 });


 
app.get('/api/phones/all/', function(req, res){
  let sql = `SELECT * FROM phones`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    res.json(results);
  });
  
});

//add comment
app.post('/api/addcomment',function(req,res){
  let response= req.body;
  console.log(response);
    let sql =`INSERT INTO comments(cuser,pid,cemail,comment,cdate) VALUES (?,?,?,?,CURRENT_DATE)`;
    let creds=[response.uname,response.id,response.email,response.comment];
    connection.query(sql, creds, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.json(results);
      });
});


app.post('/api/post',verifyToken,function(req,res){
  jwt.verify(req.token,'mysecretkey',function(err,authData){
    if(err){
      res.sendStatus(403);
    } else{
      res.json({
        message:"Post added",
        authData
      });
    }
  });
});


//add phones
app.post('/api/addphones',verifyToken,function(req,res){
      let response=[];
      response=req.body;
      let sql ='INSERT INTO phones(brand,name,imglink1,imglink2,announced,status,dimensions,weight,build,sim,disptype,dispsize,dispres,ismultitouch,protection,os,chipset,gpu,maincamtype,maincamfeatures,maincamvid,selfcamtype,selfcamfeatures,selfcamvid,alerttype,loudspeakers,jack,soundmisc,wlan,bluetooth,gps,nfc,radio,usb,sensors,messaging,browser,batterybasic,talktime,musicplay,colors,price) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
      let creds= [response.brand,response.name,response.imglink1,response.imglink2,response.announced,response.status,response.dimensions,response.weight,response.build,response.sim,response.disptype,response.dispsize,response.dispres,response.ismultitouch,response.protection,response.os,response.chipset,response.gpu,response.maincamtype,response.maincamfeatures,response.maincamvid,response.selfcamtype,response.selfcamfeatures,response.selfcamvid,response.alerttype,response.loudspeakers,response.jack,response.soundmisc,response.wlan,response.bluetooth,response.gps,response.nfc,response.radio,response.usb,response.sensors,response.messaging,response.browser,response.batterybasic,response.talktime,response.musicplay,response.colors,response.price];
      jwt.verify(req.token,'mysecretkey',function(err,authData){
        if(err){
          res.sendStatus(403);
        } else{
          connection.query(sql,creds,function(error,results,fields){
    
            if(error)
               return console.error(error.message);
            console.log(results);
            console.log(sql);
          });
          res.json({
            message:"Phone added",
            authData
          });
        }
      });   
    });
//delete 
app.delete('/api/delete/:id',verifyToken,function(req,res){
  let sql=`DELETE FROM phones WHERE id=?`;
  let delval=[req.params.id];
  jwt.verify(req.token,'mysecretkey',function(err,authData){
    if(err){
      res.sendStatus(403);
    } else{
      connection.query(sql,delval,(error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results);
        res.json(JSON.stringify("Phone Deleted"));
      });
    }
  });   
});

//GETING INFOMATION FROM BACKEND
app.get('/api/comments/:id', function(req,res){
  let sql = `SELECT * FROM comments WHERE pid=`+ req.params.id ;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
});


//returns json obj containing information of the phones with given id
app.get('/api/phones/:id', function(req, res){
        let sql = `SELECT * FROM phones WHERE id=`+ req.params.id ;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
    });




//tells server to listen on port 5000    
app.listen(port, ()=> console.log(`Server stated on port ${port}`));