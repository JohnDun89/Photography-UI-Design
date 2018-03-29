import React from 'react';

class LeftContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="parent" id="left-content-box">
                <h1>Hello</h1>
            </div>
        );
    }
}

export default LeftContentBox;