import React from 'react';

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
                    Hey I'm on the right. 
                </h1>
            </div>
        );
    }
}

export default RightComponent;