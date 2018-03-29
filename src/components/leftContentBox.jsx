import React from 'react';
import MainArrows from './mainArrows.jsx'

class LeftContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="parent" id="left-content-box">
                < MainArrows />
                
                <h1>Hello</h1>
            </div>
        );
    }
}

export default LeftContentBox;