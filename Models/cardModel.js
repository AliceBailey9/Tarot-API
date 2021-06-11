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
      const card = cardsObj.cards.filter((card) => card.name === cardName);
      cb(null, card);
    }
  });
};

const fetchRandomCard = (cb) => {
  fs.readFile("./data/cards.json", "utf8", (err, cards) => {
    if (err) console.log(err);
    else {
      const cardsObj = JSON.parse(cards);
      const cardNum = Math.floor(Math.random() * cardsObj.cards.length);
      cb(null, cardsObj.cards[cardNum]);
    }
  });
};

module.exports = { fetchAllCards, fetchCard, fetchRandomCard };
