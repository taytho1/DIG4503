import React from 'react';

//function that is used to define and display the number of items
function MarketItem (props){

    return (
        <div>
            <p>Items: {props.count}</p>
        </div>
    );
}
//exports the function MarketItem
export default MarketItem;