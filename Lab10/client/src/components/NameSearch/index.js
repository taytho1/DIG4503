//importing react
import React from "react";

//class that will handle the name search bar
class NameSearch extends React.Component {
    //event handler for getting the name
    readName(event){
        event.preventDefault();
        //setting element equal to the value of the name in the database entered
        let element = document.querySelector("#name");
        //getting the value of the name
        fetch("/employees/name/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) =>{
            //defining the area that the information will be displayed
            let reporting = document.querySelector("#reportingArea");
            //setting the information if the value does not exists in the database
            if(processed.error){
                reporting.innerHTML = processed.error;
            } 
            //setting the information if the value does exists in the database
            else{
                reporting.innerHTML = processed.age;
            }
        });
        //setting the initial value equal to a blank string
        element.value = "";
    }
    //displaying the html for the name search bar
    render(){
        return(
            <div>
            <h2>Enter Name For Age</h2>
            <form onSubmit={this.readName}>
                <input id="name" type="text"/>
                <button>Submit</button>
            </form>
            </div>
        );
    }
}
//exporting the name search class
export default NameSearch;