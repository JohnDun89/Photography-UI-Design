import React from 'react';
import MainArrows from './mainArrows.jsx'

class LeftContentBox extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <div className="parent" id="left-content-box">
                < MainArrows />
                
                
                <h2 onClick={this.props.action}>Portfolio Two</h2>
                <h2>Portfolio One</h2>
            </div>
        );
    }
}

export default LeftContentBox;