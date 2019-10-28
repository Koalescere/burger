var orm = request("../config/org.js");

// Object for all our SQL statement functions.
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
        cb(res);
      });
    },
}  
module.exports = burger