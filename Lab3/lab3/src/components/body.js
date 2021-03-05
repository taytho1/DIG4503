//new file to make the body paragraph text compoonent 

import React from 'react';
import '../myStyles.css';

//Creating the Body component
class Body extends React.Component {
    
    //cat name prop passed into the render function
    //paragraph tags that display the text under the image
    render (cname) {
        return <div>
        <p>
            In my spare time I like to spend time with my cat, {this.props.catname}.
            She loves to run around my apartment when she's hyper, and when shes sleepy
            she will snuggle up next to me. Having her around during the pandemic has made 
            staying at home easier. 
        </p>
        <p>Try booping her nose!</p>
        </div>
    }
}
//exporting the Body component
export default Body;