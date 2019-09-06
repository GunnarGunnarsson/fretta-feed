let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

// export function getStundin () {
//   (async () => {
//     let feed = await parser.parseURL('https://stundin.is/rss/');
//     console.log(feed.title);

//     feed.items.forEach(item => {
//       console.log(item.title + ':' + item.link);
//     });
//     return { doing: 'sploing' };
//   })();
// }

export default {
  getStundin: () => parser.parseURL(CORS_PROXY + 'https://stundin.is/rss/')
    .then(data => data)
    .catch(error => console.log(error))
};

// export default {
//   initializePages: () => axios.get(`${apiUrl}/pages`)
//       .then(response => response.data)
//       .catch(error => console.log(error))
// ,


// let Parser = require('rss-parser');
// let parser = new Parser();
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
// (async () => {
//   let feed = await parser.parseURL(CORS_PROXY + 'https://stundin.is/rss/');
//   feed.items.forEach(item => {
//     console.log(item);
//   });
// })();

// export default getStundin;
