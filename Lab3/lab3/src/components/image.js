//new js file to make the image component

import React from 'react';
import '../myStyles.css';

//class that creates the image component
class Image extends React.Component {
    //cat and boop props
    render (cat, boop) {
        return (
        //defining the html tags for the image
        //defing the props for the source and the onClick handeler
        <div>
            <img 
                onClick={this.props.catboop} 
                src={this.props.catimage} 
                alt="Cat" />
        </div>
        )
    }
}
//exporting the component Image
export default Image;