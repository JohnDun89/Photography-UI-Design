import React from 'react';
import LeftContentBox from './leftContentBox.jsx';

class LeftComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="component" id="left">
                <h1>
                    Hey I'm on the left.
                    < LeftContentBox />
                </h1>
            </div>
        );
    }
}

export default LeftComponent;