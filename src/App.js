import React, { useState, useEffect } from "react";
import Quote from "./quote";
import "./styles.css";

export default function App() {
  const API_URL = "https://kyaw-quote-server.glitch.me/quotes/random";
  const [quotes, setQuotes] = useState({});

  async function fetchData() {
    const res = await fetch(API_URL);
    res
      .json()
      .then(res => setQuotes(res))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Quote quotes={quotes} />
    </div>
  );
}
