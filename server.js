var express = require('express'); 
var app = express();
var server = app.listen(3000); //using localhost:3000

app.use(express.static('public')); //using all files within public folder


console.log("My socket server is running");//testing server is running

