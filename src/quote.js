import React from "react";

const Quote = ({ quotes }) => {
  return (
    <blockquote cite="https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json">
      <p>{quotes.quote}</p>
      <footer>—{quotes.author}</footer>
    </blockquote>
  );
};

export default Quote;
