import React from 'react';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { folioOne: false,
         folioTwo: false};
    }

    portfolioOne = []


    render() {
        return (
            <div id="picture">
            <img src="./images/sophie.jpg" alt="portrait on aurther's seat of Sophie"/>
            </div>
        );
    }
}

export default ImageContainer;