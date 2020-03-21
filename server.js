var express = require('express');
var path = require('path')
var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());



//Routes

require ('./app/routing/htmlRoutes') (app)
require ('./app/routing/apiRoutes') (app)



// Your server.js file should require the basic npm packages we've used in class: express and path.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });