import React from 'react';
import LeftContentBox from './leftContentBox.jsx';
import Title from "./title.jsx";

class LeftComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="component" id="left">
                <h1>
                   <Title />
                    <LeftContentBox action={this.props.action} back={this.props.back} forward={this.props.forward}/>
                </h1>
            </div>
        );
    }
}

export default LeftComponent;