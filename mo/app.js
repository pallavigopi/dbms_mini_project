var express = require('express');
var app = express();

var mysql = require('mysql')

app.use(express.static("public"));
app.set("view engine","ejs");
var myConnection = require('express-myconnection');

var config = require('./config');
var dbOptions = {

    host:config.database.host,
    user:config.database.user,
    password:config.database.password,
    port:config.database.port,
    database:config.database.db
}

app.use(myConnection(mysql,dbOptions,"pool")); //pool of connections which end when response ends
var index = require("./routes/index");
var users = require("./routes/users");


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

app.use("/",index); 
app.use("/users",users);
var flash =  require("express-flash");
app.use(flash());

app.listen(3020,function(req,res){
    console.log("server started");
})
