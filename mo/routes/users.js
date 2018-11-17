var express = require("express");
var app = express();

app.get("/",function(req,res,next){

	req.getConnection(function(error,conn){
      conn.query("SELECT * FROM phone ",function(err,rows,fields){

      	if(err){

			res.flash("error",error);
			res.render("user/list",{title:"User List",data:""})
		}
		else{

			res.render("user/list",{title:"User List",data:rows })
		}

      })
		
	})
})

module.exports = app;