let Parser = require('rss-parser');
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL('https://stundin.is/rss/');
  console.log(feed);

  // feed.items.forEach(item => {
  //   console.log(item.title + ':' + item.link)
  // });
})();
