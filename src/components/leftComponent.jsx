import React from 'react';

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
                </h1>
            </div>
        );
    }
}

export default LeftComponent;