import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styling/popup.css";

function PopUp({toggle}) {
  const closePopUp = () => {
    toggle();
  };
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="popUpHeader">Are you sure you want to exit quiz?</span>
        <div>
          <Button className="noButton" size="massive" onClick={() => closePopUp()}>
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

export default PopUp;