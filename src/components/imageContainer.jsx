import React from 'react';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { folioOne: false,
                       folioTwo: false
        };

         this.folioOneRender = this.folioOneRender.bind(this)
    }



    


    folioOneRender(image) {
        return ( 
            <div id="picture">
                <img src={image} alt="portrait on aurther's seat of Sophie" />
            </div>
        )
    }

    render() {

       const portfolioOne = ["","./images/sophie.jpg","./images/fashion.jpg"]

        return (
            <div>
                    {this.folioOneRender(portfolioOne[this.props.number])}
            </div>
        );
    }
}

export default ImageContainer;