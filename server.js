const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 5000;
var cors = require('cors'); 
const bodyParser=require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'rohan',
    password: 'chaliyan',
    database: 'mobile',
    multipleStatements:'true'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });
  
app.get('/api/phones/',(req , res)=>{
    const phones =[
        {id:1, pbrand:'OnePlus', pname:'5T', pprice:"32,000"},
        {id:2, pbrand:'OnePlus', pname:'6 Avengers Edition', pprice:"42,000"},
        {id:3, pbrand:'Iphone', pname:'XS', pprice:"52,000"},
        {id:4, pbrand:'Samsung', pname:'Galaxy J7', pprice:"12,000"}
    ]

    res.json(phones);
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

app.post('/addphones',function(req,res){

  let response=req.body;
  console.log(req.body);
  let sql ='INSERT INTO phones(brand,name,imglink1,imglink2,announced,status,dimensions,weight,build,sim,disptype,dispsize,dispres,ismultitouch,protection,os,chipset,gpu,maincamtype,maincamfeatures,maincamvid,selfcamtype,selfcamfeatures,selfcamvid,alerttype,loudspeakers,jack,soundmisc,wlan,bluetooth,gps,nfc,radio,usb,sensors,messaging,browser,batterybasic,talktime,musicplay,colors,price) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
  let creds= [response.brand,response.name,response.imglink1,response.imglink2,response.announced,response.status,response.dimensions,response.weight,response.build,response.sim,response.disptype,response.dispsize,response.dispres,response.ismultitouch,response.protection,response.os,response.chipset,response.gpu,response.maincamtype,response.maincamfeatures,response.maincamvid,response.selfcamtype,response.selfcamfeatures,response.selfcamvid,response.alerttype,response.loudspeakers,response.jack,response.soundmisc,response.wlan,response.bluetooth,response.gps,response.nfc,response.radio,response.usb,response.sensors,response.messaging,response.browser,response.batterybasic,response.talktime,response.musicplay,response.colors,response.price];
  connection.query(sql,creds,function(error,results,fields){

    if(error)
       return console.error(error.message);


    console.log(results);
    console.log(sql);
    res.json(results);

  });

 
});



app.listen(port, ()=> console.log(`Server stated on port ${port}`));