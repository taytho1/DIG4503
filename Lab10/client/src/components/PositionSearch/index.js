//importing react
import React from "react";

//class that will handle the position search bar
class PositionSearch extends React.Component {
    //event handler for getting the position
    readPosition(event){
        event.preventDefault();
        //setting element equal to the value of the position in the database entered
        let element = document.querySelector("#position");
        //getting the value of the position
        fetch("/employees/position/" + element.value)
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
                reporting.innerHTML = processed.name;
            }
        });
        //setting the initial value equal to a blank string
        element.value = "";
    }
    //displaying the html for the position search bar
    render(){
        return(
            <div>
            <h2>Enter Position For Name</h2>
            <form onSubmit={this.readPosition}>
                <input id="position" type="text"/>
                <button>Submit</button>
            </form>
            </div>
        );
    }
}
//exporting the position search class
export default PositionSearch;