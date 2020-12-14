import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styling/PopUp.css";
export default class PopUp extends Component {
    closePopUp = () => {
        this.props.toggle();
    };
    render() {
        return (
            <div className="modal">
                <div className="modal_content">
                    <span className="popUpHeader">
                        Are you sure you want to exit quiz?
                    </span>
                    <div>
                        <Button
                            className="noButton"
                            size="massive"
                            onClick={this.closePopUp}
                        >
                            No
                        </Button>

                        <Link to="/profile">
                            <Button className="yesButton" size="massive">
                                Yes
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
