require("dotenv").config();



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
    host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "iwu9b0witgjcqamk",
    password: "j6cmzc3lpf99rswn",
    database: "w9d2wftkybxrqlvo"  
  });
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);

});

module.exports = connection;
