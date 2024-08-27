import React, { useState } from "react";
import "./App.css";
import UpvoteButton from "./components/UpvoteButton";

function App() {
  const [toggleSelect, setToggleSelect] = useState(false);

  const handleToggle = () => {
    setToggleSelect((prevToggle) => !prevToggle);
    // console.log("toggle");
  };
  return (
    <div className="App">
      <UpvoteButton handleToggle={handleToggle} toggleSelect={toggleSelect} />
    </div>
  );
}

export default App;
