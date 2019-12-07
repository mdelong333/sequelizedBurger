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

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        name: req.body.name,
        devoured: req.body.devoured
    }).then(function(dbBurger) {
        res.json(dbBurger);
    }).catch(function(err) {
        res.json(err);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    }).catch(function(err) {
        res.json(err);
    });
});

// router.delete("/:id", function(req, res) {
    
// });

module.exports = router;