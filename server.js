//Dependencies
//================================================================================
let express = require("express");

//Configure Express
//Tells Node we are creating an "express" server
let app = express();

//Sets and initial port
let PORT = process.env.PORT || 8080;

//Sets Up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Create our Router

require("./app/routing/apiroutes")(app)
require("./app/routing/htmlroutes")(app)

//Create the listener
app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT)
})