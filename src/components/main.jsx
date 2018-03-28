import  React  from "react";
import RightComponent from "./rightComponent.jsx";
import LeftComponent from "./leftComponent.jsx";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const pictureBackground = [1].map((number) => 
            <div className="parent" key={number.toString()}>
                < RightComponent />
        </div>
    )
        return (
            <div  id="top-level-home-container">
                < LeftComponent />
                <CSSTransitionGroup
                    transitionEnter={true}
                    transitionName="introduction"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}

                    transitionLeaveTimeout={1500}
                    transitionEnterTimeout={1500}
                >
                {pictureBackground}
                </CSSTransitionGroup >

            </div>
        );
    }
}

export default Main;