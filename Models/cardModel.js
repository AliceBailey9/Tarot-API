const fs = require("fs");

const fetchAllCards = (cb) => {
  fs.readFile("./data/cards.json", "utf8", (err, cards) => {
    if (err) console.log(err);
    else {
      console.log(cards);
      cb(null, cards);
    }
  });
};

module.exports = { fetchAllCards };
