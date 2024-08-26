import React from "react";
import arrowUp from "./arrow-up.svg";
import "./UpvoteButton.css";

const UpvoteButton = () => {
  return (
    <button className="upvote-button">
      <img src={arrowUp} alt="Upvote Arrow" className="arrow-up" />
    </button>
  );
};

export default UpvoteButton;
