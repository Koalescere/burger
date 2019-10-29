require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Set Handlebars.
var exphbs = require("express-handlebars");
// var PORT = process.env.PORT || 3000;
var app= express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
}));

app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");
app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
