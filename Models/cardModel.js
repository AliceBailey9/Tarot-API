const fs = require("fs");

const fetchAllCards = (cb) => {
  fs.readFile("./data/cards.json", "utf8", (err, cards) => {
    if (err) console.log(err);
    else {
      cb(null, cards);
    }
  });
};

const fetchCard = (cardName, cb) => {
  fs.readFile("./data/cards.json", "utf8", (err, cards) => {
    if (err) console.log(err);
    else {
      const cardsObj = JSON.parse(cards);
      //  for(let i = 0; )
      cb(null, cardsObj.cards);
    }
  });
};

module.exports = { fetchAllCards, fetchCard };
