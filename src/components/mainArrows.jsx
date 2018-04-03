import React from 'react';

class MainArrows extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    // backClicked() {
    //    console.log("back") 
    //    this.props.back()
    // }
    
    render() {
        return (
            <div id="main-arrow-container">
                <div>
                    <h2 onClick={this.props.back}>
                        Back
                    </h2>
                </div>
                <div>
                    <h2 onClick={this.props.forward}>
                        Forward
                    </h2>
                </div>
            </div>
        );
    }
}

export default MainArrows;