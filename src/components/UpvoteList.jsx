import React from "react";
import UpvoteButton from "./UpvoteButton";
import "./UpvoteList.css";
import plus from "./plus.svg";

const UpvoteList = ({
  listIndex,
  selectedStates,
  onButtonToggle,
  onListToggle,
  onAddButton,
}) => {
  return (
    <div className="upvote-list-container">
      <div
        className="upvote-list"
        onClick={(e) => {
          e.stopPropagation();
          onListToggle(listIndex);
        }}
      >
        {selectedStates.map((isSelected, index) => (
          <UpvoteButton
            key={index}
            isSelected={isSelected}
            onButtonToggle={(e) => {
              e.stopPropagation();
              onButtonToggle(listIndex, index);
            }}
          />
        ))}
      </div>
      <button
        className="add-button"
        onClick={(e) => {
          e.stopPropagation();
          onAddButton(listIndex);
        }}
      >
        <img src={plus} alt="+"></img>
      </button>
    </div>
  );
};

export default UpvoteList;
