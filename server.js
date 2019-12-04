var express = require("express");



var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//have to make a post request to my database and then a reponse back 



console.log('hi')



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });