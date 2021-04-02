//importing react
import React from "react";

//class that will handle the name search bar
class NameSearch extends React.Component {
    readName(event){
        event.preventDefault();
        let element = document.querySelector("#name");

        fetch("/employees/name/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) =>{
            let reporting = document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML = processed.error;
            } else{
                reporting.innerHTML = processed.age;
            }
        });
        element.value = "";
    }
    //displaying the html
    render(){
        return(
            <div>
            <h2>Name</h2>
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