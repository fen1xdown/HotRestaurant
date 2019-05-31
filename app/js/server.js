// Dependencies
var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Setting up the initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up the routes//
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Listening app function//

app.listen(3000, function() {
  console.log("App listening on PORT: " + 3000);
});