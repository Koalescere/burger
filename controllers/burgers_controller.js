var express = require("express");
//https://expressjs.com/en/guide/using-middleware.html
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(results){  //Json return from the database
        var retValue= {
            burger_data: results
          };
      
        console.log(results);
        res.render("index", retValue);
    });
});
router.put("/burgers/update", function(req,res){
    burger.updateOne(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect("/");
    
    });
});

module.exports = router;
