import React from "react";
import {Alert} from "reactstrap";



class GreenAlert extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(){
        this.setState({visible: false});
    }

    render(){
        return(

            <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                <div className="text-center mb-4">
                    <h1>Timer Completed!</h1>
                    <medium>Go ahead and take a 5 or 15 minute break</medium>
                </div>

            </Alert>





        );
    }
}

export default GreenAlert;