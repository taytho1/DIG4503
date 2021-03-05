//original code for the welcome message component

import React from 'react';
import '../myStyles.css';

//component for the header (from the original lab)
class Homepage extends React.Component {
    //name prop being passed in the render function to display name
    render (fname) {
        return <h1> Hello my name is {this.props.firstName}!</h1>
    }
}
//exportnig the Homepage component
export default Homepage;