import React from 'react';
import ImageContainer from './imageContainer.jsx'

class RightComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

   // here I need to toggle whether images are displayed or not. 

   
    render() {
        console.log("hey", this.props.button)


        return (
            <div  id="right">
                <h1>
                    <div id="image-container">
                    < ImageContainer number={this.props.button}/>
                   </div>
                </h1>
            </div>
        );
    }
}

export default RightComponent;