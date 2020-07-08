import React, { useState, useEffect } from "react";
import Quote from "./quote";
import "./styles.css";

export default function App() {
  const API_URL = "https://kyaw-quote-server.glitch.me/quotes/random";
  const [hasError, setErrors] = useState(false);
  const [quotes, setQuotes] = useState({});
  let [delay, setDelay] = useState(5000);

  async function fetchData() {
    const res = await fetch(API_URL);
    res
      .json()
      .then(res => setQuotes(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Quote quotes={quotes} />
    </div>
  );
}
