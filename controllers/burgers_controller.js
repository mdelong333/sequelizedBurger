var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.render("index", { dbBurger });
    });
});

router.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
        res.json(dbBurger);
    })
});

// router.post("/burgers/api", function(req, res) {
//     db.Burger.create({
//         name
//     })
// });

// router.put("/burgers/:id", function(req, res) {
    
// });

// router.delete("/:id", function(req, res) {
    
// });

module.exports = router;