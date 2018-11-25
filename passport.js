var passport = require('passport-local');
var mysql = require('mysql');
var LocalStratergy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 8;

//db connection
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

module.exports = function(passport){
    passport.use(new LocalStratergy(function(username,password,done){
        //Match Username
        let sql = `SELECT * FROM users where uname=? `;
        let uname=[username];
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          if (typeof results !== 'undefined' && results.length > 0) {
            // the array is defined and has at least one element
            bcrypt.compare(password,results[0].password,function(err,isMatch){
                if(err)
                    throw err;
                if(isMatch){
                    return done(null,user);
                    
                } else{
                    return done(null,false,{message:"Wrong Password"});
                }
            });
        }
    });
    }));
    //serailze and deseralize
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}