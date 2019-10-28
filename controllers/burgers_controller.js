var express = require("express");
//https://expressjs.com/en/guide/using-middleware.html
var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;
