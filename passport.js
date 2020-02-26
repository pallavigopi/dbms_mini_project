var passport = require('passport-local');
var mysql = require('mysql');
var LocalStratergy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 8;

//jwt
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = 'secret keyy';

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
    passport.use(new JwtStrategy(function(jwt_payload,done){
        //Match Username
        let sql = `SELECT * FROM users where uname=? `;
        let uname=[jwt_payload.username];
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
                    return done(null,user,{message: 'Logged In Successfully'});
                    
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

      //jwt 
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'muku bear hodor'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        console.log("find user id needed");
    }
));
}