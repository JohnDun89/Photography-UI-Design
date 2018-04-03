import  React  from "react";
import RightComponent from "./rightComponent.jsx";
import LeftComponent from "./leftComponent.jsx";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            folioNumber: 1,
            DisplayFolioOne: false,
            DisplayFolioTwo: false,
            DisplayImageContent: false
         };

        this.imageDisplayChange = this.imageDisplayChange.bind(this)
        this.buttonPressed = this.buttonPressed.bind(this)
    }

    imageDisplayChange(number){
        console.log(this.state.folioNumber)
        // this.setState({folioNumber : number})
    }

    buttonPressed( ) {
        console.log("beep") 
        if (this.state.folioNumber !== 7) {
            this.setState((state) => ({folioNumber: state.folioNumber + 1 }))
        } else {
            this.setState((state) => ({ folioNumber:  1 }))
        }
        console.log(this.state.folioNumber)
    }

    forwarButtonPressed( ) {
       
// not working 
       if (this.state.folioNumber !== 0 ) {
           this.setState((state) => ({folioNumber: state.folioNumber +1 }))
       }
    }

    render() {
        const pictureBackground = [1].map((number) => 
            <div className="parent" key={number.toString()}>
                < RightComponent button={this.state.folioNumber} />
        </div>
    )
        return (
            <div  id="top-level-home-container">
                < LeftComponent  action={this.imageDisplayChange} back={this.buttonPressed} forward={this.forwarButtonPressed}/>
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