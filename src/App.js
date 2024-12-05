import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Oops! Couldn't fetch a joke. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Michael's Joke Generator</h1>
      <button className="button" onClick={fetchJoke} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get a Joke"}
      </button>
      <p className="joke">{joke}</p>
    </div>
  );
}

export default App;
