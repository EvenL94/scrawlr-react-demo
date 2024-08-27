import React, { useState, useEffect } from "react";
import "./App.css";
import UpvoteList from "./components/UpvoteList";

function App() {
  // Initialize from localstorage if fetched, else set to a defult list of one button
  const [lists, setLists] = useState(() => {
    const storedLists = localStorage.getItem("upvoteLists");
    return storedLists ? JSON.parse(storedLists) : [[false]];
  });

  // Update localstorage when there is a change
  useEffect(() => {
    localStorage.setItem("upvoteLists", JSON.stringify(lists));
  }, [lists]);

  // Toggle a single button in a list
  const handleButtonToggle = (listIndex, buttonIndex) => {
    setLists((prevLists) => {
      const newLists = prevLists.map((list, i) => {
        if (i === listIndex) {
          const newList = [...list];
          newList[buttonIndex] = !newList[buttonIndex];
          return newList;
        }
        return list;
      });
      return newLists;
    });
  };

  // Toggle all buttons in a list
  const handleListToggle = (listIndex) => {
    setLists((prevLists) => {
      const newLists = prevLists.map((list, i) => {
        if (i === listIndex) {
          return list.map((state) => !state);
        }
        return list;
      });
      return newLists;
    });
  };

  // Add a new button to a list
  const handleAddButton = (listIndex) => {
    setLists((prevLists) => {
      const newLists = prevLists.map((list, i) => {
        if (i === listIndex) {
          return [...list, list[list.length - 1]];
        }
        return list;
      });
      return newLists;
    });
  };

  // Add a new list with a non-selected upvote button
  const handleAddList = () => {
    setLists((prevLists) => [...prevLists, [false]]);
  };

  // Reset to default with one list and one unselected upvote button and refresh the page
  const handleReset = () => {
    localStorage.setItem("upvoteLists", JSON.stringify([[false]]));
    window.location.reload(false);
  };

  return (
    <div className="App">
      <div className="upvote-lists">
        <div className="instructions-list-container">
          <ul className="instructions-list">
            <li>Instructions:</li>
            <li>- Click any upvote button to toggle its state</li>
            <li>
              - Click on the upvote list outside upvote buttons to toggle all
              buttons in the list
            </li>
            <li>
              - Click the + button on the right side of any list to add a new
              upvote button to this list
            </li>
            <li>- Click the Add New List button to add a new upvote list</li>
            <li>- Click the Reset button to reset the page</li>
          </ul>
        </div>
        <button onClick={handleAddList} className="add-new-list button">
          Add New List
        </button>
        <button onClick={handleReset} className="reset button">
          Reset
        </button>

        {lists.map((list, index) => (
          <UpvoteList
            key={index}
            listIndex={index}
            selectedStates={list}
            onButtonToggle={handleButtonToggle}
            onListToggle={handleListToggle}
            onAddButton={handleAddButton}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
