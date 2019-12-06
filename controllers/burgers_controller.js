var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/api", function(req, res) {
    console.log(req.body);
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.updateOne({devoured: true}, condition, function(res) {
        // res.redirect("/burgers");
    });
});

router.delete("/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    burger.delete(condition, function(res) {
        res.redirect("/burgers");
    });
});

module.exports = router;