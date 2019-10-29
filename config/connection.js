require("dotenv").config();

var keys = require("../keys.js");
// var jawsdb = new jawsdb(keys.spotify);


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // Your password
  password: "TESTPASSWORD",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection=mysql.createConnection({
    host: "jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ha3t7k4dw99y4lii",
    password: "enh8q23ay1bcz4jl",
    database: "tfkppzvmes1pcu82"  
  });
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);

});

module.exports = connection;
