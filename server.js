
const express = require('express');
var passport=require('passport');
var mysql = require('mysql');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
var cors = require('cors');
var login = require('./passport');

//bcrypt and saslt
const bcrypt = require('bcrypt');
var saltRounds=8;


//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//passport.js
require('./passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//cors (cross origin resource sharing)
app.use(cors());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'rohan',
    password: 'chaliyan',
    database: 'mobile',
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });

//signup 
app.post('/signup',function(req,res){
  let response= req.body;
  console.log(response);
  let myPlaintextPassword=response.password;
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    let sql =`INSERT INTO user(cuser,cemail,comment,cdate,time) VALUES (?,?,?,?,?OT )`;
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

//add comment
app.post('/addcomment',function(req,res){
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

//login
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user);
  });

//returns json obj containing information all the phones
app.get('/api/phones/all/', function(req, res){
        let sql = `SELECT * FROM  phones `;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          res.json(results);
    });
        
    });

//add phones
app.post('/addphones',function(req,res){

      let response=req.body;
      console.log(req.body);
      let sql ='INSERT INTO phones(brand,name,imglink1,imglink2,network,announced,status,dimensions,weight,build,sim,disptype,dispsize,dispres,ismultitouch,protection,os,chipset,cpu,gpu,cardslot,ram,rom,maincamtype,maincamfeatures,maincamvid,selfcamtype,selfcamfeatures,selfcamvid,alerttype,loudspeakers,jack,soundmisc,wlan,bluetooth,gps,nfc,radio,usb,sensors,messaging,browser,batterybasic,talktime,musicplay,colors,price,otherdisplayfeatures,otherbodyfeatures,othercamerafeatures,otherfeatures) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      let creds= [response.brand,response.name,response.imglink1,response.imglink2,response.network,response.announced,response.status,response.dimensions,response.weight,response.build,response.sim,response.disptype,response.dispsize,response.dispres,response.ismultitouch,response.protection,response.os,response.chipset,response.cpu,response.gpu,response.cardslot,response.ram,response.rom,response.maincamtype,response.maincamfeatures,response.maincamvid,response.selfcamtype,response.selfcamfeatures,response.selfcamvid,response.alerttype,response.loudspeakers,response.jack,response.soundmisc,response.wlan,response.bluetooth,response.gps,response.nfc,response.radio,response.usb,response.sensors,response.messaging,response.browser,response.batterybasic,response.talktime,response.musicplay,response.colors,response.price,response.otherdisplayfeatures,response.otherbodyfeatures,response.othercamerafeatures,response.otherfeatures];
      connection.query(sql,creds,function(error,results,fields){
    
        if(error)
           return console.error(error.message);
        
                 console.log(results);
                 res.json(results);

       });

                 
    });












app.get('/api/comments/:id', function(req,res){
  let sql = `SELECT * FROM comments WHERE pid=`+ req.params.id ;
        connection.query(sql, function(error, results, fields) {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
    });

    
//returns json obj containing information of the phones with given id
app.get('/api/phones/:id', function(req, res){
        let sql = `SELECT * FROM  phones WHERE id=`+ req.params.id ;
        connection.query(sql, function(error, results, fields) {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
   });

app.put("/editform/:id",function(req,res){
    
    let response=req.body;
    let sql = `UPDATE test SET ? WHERE id=` + req.params.id  ;
    let creds = [response.brand]
    connection.query(sql,creds,function(error,results,fields){

      if(error)
        console.log(error.message);
      console.log(results);
      res.json(results);
    })

});



app.delete("/editform/:id",function(req,res){

  connection.query("DELETE FROM phones WHERE id=" + req.params.id,function(error,results,fields){

    if(error)
      return console.error(error.message);
    console.log(results);
    res.json(results);
  })
})


//tells server to listen on port 5000    
app.listen(port, ()=> console.log(`Server stated on port ${port}`));