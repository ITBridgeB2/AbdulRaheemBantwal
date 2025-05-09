const Filter = require('bad-words');
const filter = new Filter();

function filterBadContent(text) {
  return filter.clean(text);
}

module.exports = filterBadContent;
