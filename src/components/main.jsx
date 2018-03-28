import  React  from "react";
import RightComponent from "./rightComponent.jsx";
import LeftComponent from "./leftComponent.jsx";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="top-level-home-container">
                < LeftComponent />
                < RightComponent />
            </div>
        );
    }
}

export default Main;