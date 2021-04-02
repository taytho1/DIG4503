//importing react
import React from "react";

//Class theat will handle the age search bar
class AgeSearch extends React.Component {
    readAge(event){

        event.preventDefault();

        let element = document.querySelector("#age");

        fetch("/employees/age/" + element.value)
        .then((res)=> {
            return res.json();
        })

        .then((processed) => {

            let reporting = document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML = processed.error;
            } else{
                reporting.innerHTML = processed.name;
            }
        });
        element.value = "";
    }
    //displaying the html
    render(){
        return(
            <div>
                <h2>Age</h2>
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