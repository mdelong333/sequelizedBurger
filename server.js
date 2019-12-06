var express = require("express");
require("dotenv").config();

var PORT = process.env.PORT || 8080;
var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
