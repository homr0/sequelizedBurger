// Dependecies
const express = require("express");

// Server configuration
var PORT = process.env.PORT || 3000;

var app = express();

// Requires the models for sync
var db = require("./models");

// Serves static files from the public directory.
app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Sets up Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var burgerRoutes = require("./controllers/burger_controller.js");
var eaterRoutes = require("./controllers/eater_controller.js");

app.use(burgerRoutes);
app.use(eaterRoutes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});