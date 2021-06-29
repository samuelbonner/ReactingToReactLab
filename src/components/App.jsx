import React, { useState } from "react";
import ReactDOM from "react-dom";
import Greeter from "./Greeter";

const App = () => {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleButtonClick = () => {
    setLoaded(prevCheck => !prevCheck);
  }

  if (loaded) {
  return (
      <div>
        <h1>
          {" "}
          <Greeter phrase="Why hello there" name="General Grievous" />{" "}
        </h1>
        <h1>
          {" "}
          <Greeter phrase="Who art thou talking about" name="Willis" />{" "}
        </h1>
        <h1>
          {" "}
          <Greeter phrase="This is my pet frog" name="Sir Frogington" />{" "}
        </h1>

        <input value="text" />
        {/* onChange={this.handleInputChange}  */}

        <p>You are logging in as: {username}</p>
      </div>
      );
  } else {
    return (
    <div>
      <h1> Website Loading... </h1>
      <button onClick={handleButtonClick}>Load Website!
      </button>
    </div>
    )
  }
};

export default App;
