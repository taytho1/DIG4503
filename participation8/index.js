//importing Express
import Express from "express";
//defining express and the port to listen on
const App = Express();
const port = 3010;

//Greeting path and the string it displays
App.get('/greeting/:name', (req, res) => {
    res.send("Hello " + req.params.name + "!");
});

//Pet name path and the string it displays
App.get('/pet/:petname', (req, res) => {
    res.send("My pets name is " + req.params.petname + "!");
});

//app is listening for the port 
App.listen(port, () => {

});