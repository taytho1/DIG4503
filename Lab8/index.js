//importing express and fs
import Express from 'express';
import fs from "fs";

//definging the app and the port
const App = Express();
const port = 3010;

//reading the file contents
let fileContents = fs.readFileSync("database.json")

//converting the file to json
let database = JSON.parse(fileContents);

//get the names of each employee
App.get('/employees/name/:name', (req, res) => {
    //error message
    let result = {"error": "Not found"};

    //if the name entered is in the database
    database.forEach((value) =>{
        if(req.params.name == value.name){
            result = value;
        }
    });
    //return json
    res.json(result);
    
})

//get the ages of the employees
App.get('/employees/age/:age', (req, res) => {
    //error message
    let result = {"error": "Not found"};
  
    //if the age entered matches to an employees age
    database.forEach((value) => {
        if(req.params.age == value.age){
            result = value;
        }
    });

    //return json
    res.json(result);
    
})

//listening on the port previously defined 
App.listen(port, () => {
    console.log("server running!");
});