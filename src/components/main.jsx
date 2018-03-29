import  React  from "react";
import RightComponent from "./rightComponent.jsx";
import LeftComponent from "./leftComponent.jsx";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            DisplayFolioOne: false,
            DisplayFolioTwo: false,
            DisplayImageContent: false
         };

        this.imageDisplayChange = this.imageDisplayChange.bind(this)
    }

    imageDisplayChange(){
        console.log('chage triggered')

    }

    render() {
        const pictureBackground = [1].map((number) => 
            <div className="parent" key={number.toString()}>
                < RightComponent />
        </div>
    )
        return (
            <div  id="top-level-home-container">
                < LeftComponent action={this.imageDisplayChange}/>
                <CSSTransitionGroup
                    transitionEnter={true}
                    transitionName="introduction"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}

                    transitionLeaveTimeout={2000}
                    transitionEnterTimeout={2000}
                >
                {pictureBackground}
                </CSSTransitionGroup >

            </div>
        );
    }
}

export default Main;