import React from 'react';
import ImageContainer from './imageContainer.jsx'

class RightComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

   // here I need to toggle whether images are displayed or not. 


   
    render() {
        return (
            <div  id="right">
                <h1>
                    <div id="image-container">
                    < ImageContainer />
                   </div>
                </h1>
            </div>
        );
    }
}

export default RightComponent;