import React from 'react';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { folioOne: false,
         folioTwo: false};

         this.folioOneRender = this.folioOneRender.bind(this)
    }

    portfolioOne = []


    folioOneRender(image) {
        return ( 
            <div id="picture">
                <img src={image} alt="portrait on aurther's seat of Sophie" />
            </div>
        )
    }

    render() {
        return (
            <div>
                    {this.folioOneRender("./images/sophie.jpg")}
            </div>
        );
    }
}

export default ImageContainer;