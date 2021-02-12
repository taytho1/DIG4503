import React, {Component} from 'react';
import MarketItem from './MarketItem';

//class that defines and updates the props and state of the count
//Also creates the button
class Market extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    };

    render(){
//MarketItem displays the count
//Button that updates the count number wheneven it is clicked on
        return(
            <div>
                <MarketItem count={this.state.count}/>
                <button onClick={() => this.setState({count: this.state.count +1})}>Add Item</button>
            </div>
        );
    }
}
//Exports the class Market 
export default Market;