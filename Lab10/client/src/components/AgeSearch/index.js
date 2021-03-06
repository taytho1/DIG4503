//importing react
import React from "react";

//Class that will handle the age search bar
class AgeSearch extends React.Component {
    //event handler for getting the age
    readAge(event){
        event.preventDefault();
        //setting element equal to the value of the age in the database entered
        let element = document.querySelector("#age");
        //getting the value of the age
        fetch("/employees/age/" + element.value)
        .then((res)=> {
            return res.json();
        })

        .then((processed) => {
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
    //displaying the html for the age search bar
    render(){
        return(
            <div>
                <h2>Enter Age For Name</h2>
                <form onSubmit={this.readAge}>
                    <input id= "age" type="text"/>
                    <button>Submit</button>
                </form>   
            </div>
        );
    }
}
//exporting the age search class
export default AgeSearch;