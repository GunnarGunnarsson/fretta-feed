import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import api from "./services/api";

let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
(async () => {
  let feed = await parser.parseURL(CORS_PROXY + 'https://stundin.is/rss/');
  feed.items.forEach(item => {
    console.log(item);
  });
})();


ReactDOM.render(<App />, document.getElementById("app"));
