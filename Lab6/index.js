//defining and requiring express
const Express = require("express");
//setting app equal to express
const App = Express();
//the port that the code will run on
const port = 3001;

//get method that calls on the repsonse
App.get('/', function(request, response){
    response.send("Hello World!")
});

//use methode that is setting the directory for public
App.use('/public', Express.static("public"));

//listening method that is going to console log a message when the code runs
App.listen(port, function(){
    console.log("Server running!");
})