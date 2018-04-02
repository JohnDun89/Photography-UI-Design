import React from 'react';
import MainArrows from './mainArrows.jsx'

class LeftContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            arrowDisplay: true
         };
        this.folioOneClick = this.folioOneClick.bind(this)
        this.folioTwoClicked = this.folioTwoClicked.bind(this)
        this.arrows = this.arrows.bind(this)
    }

    folioOneClick () {
        this.props.action(1)

    }

    folioTwoClicked () {
        this.props.action(2)
    }

    arrows () {
        if (this.state.arrowDisplay === true) {
            console.log("true")
            return (
                
                < MainArrows />
            )
        }
    }


    render() {
        return (
            <div className="parent" id="left-content-box">
                {this.arrows()}                       
                <h2  onClick={this.folioOneClick}>Portfolio One</h2>
                <h2  onClick={this.folioTwoClicked}>Portfolio Two</h2>
            </div>
        );
    }
}

export default LeftContentBox;