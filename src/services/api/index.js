let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

var htmlToJson = require('html-to-json');

export default {
  getStundin: () => parser.parseURL(CORS_PROXY + 'https://stundin.is/rss/')
    .then(data => data)
    .catch(error => console.log(error)),
  getFullStory: (link) => htmlToJson.request(CORS_PROXY + link, {
    p: function (doc) {
      return doc.find('p').text();
    } })
    .then(res => res.p)
    .catch(error => console.log(error))
};
