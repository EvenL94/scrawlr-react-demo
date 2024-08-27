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
          return [...list, false];
        }
        return list;
      });
      return newLists;
    });
  };

  // Add a new list
  const handleAddList = () => {
    setLists((prevLists) => [...prevLists, [false]]);
  };

  // Reset to default with on list and one button and refresh the page
  const handleReset = () => {
    localStorage.setItem("upvoteLists", JSON.stringify([[false]]));
    window.location.reload(false);
  };

  return (
    <div className="App">
      <div className="upvote-lists">
        <div>
          <button onClick={handleAddList} className="add-new-list button">
            Add New List
          </button>
          <button onClick={handleReset} className="reset button" >
            Reset
          </button>
        </div>

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
