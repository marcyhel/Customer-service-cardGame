exports.build = function (server) {
  

  const card = require('../controller/cardCtrl')
  const deck = require('../controller/deckCtrl')
  const deck_list = require('../controller/deck-listCtrl')

  server
    .get('/api/v1/list-card', card.getAll)

    .get('/api/v1/deck', deck.getAll)
    .get('/api/v1/deck/:id', deck.get)

    .get('/api/v1/list-deck', deck_list.getAll)
    
   
};

