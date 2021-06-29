import React, { useState } from "react";
import Greeter from "./Greeter";

const App = () => {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleButtonClick = () => {
    setLoaded((prevCheck) => !prevCheck);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  if (loaded) {
    return (
      <div>
        <Greeter phrase="Why hello there" name="General Grievous" />
        <Greeter phrase="Who art thou talking about" name="Willis" />
        <Greeter phrase="This is my pet frog" name="Sir Frogington" />
        <input value={username} type="text" onChange={handleChange} />

        <p>You are logging in as: {username}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1> Website Loading... </h1>
        <button onClick={handleButtonClick}>Load Website!</button>
      </div>
    );
  }
};

export default App;
