import React, { useState, useEffect } from "react";
import UpvoteButton from "./UpvoteButton";
import "./UpvoteList.css";

const UpvoteList = ({
  listIndex,
  selectedStates,
  onButtonToggle,
  onListToggle,
  onAddButton,
}) => {
  return (
    <div
      className="upvote-list-container"
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
      <button
        className="add-button"
        onClick={(e) => {
          e.stopPropagation();
          onAddButton(listIndex);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UpvoteList;
