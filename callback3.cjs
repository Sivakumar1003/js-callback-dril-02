const cards = require('./cards_2.json');

//  function to get cards by list id.
function getCardsByListId (listID, callback) {
    setTimeout(() => {
        if(cards) {

            //  check list id match with cards.
            if(cards.hasOwnProperty(listID)) {
                return callback(null, cards[listID]);
            } else {
                callback(null, `No cards found in this list id ${listID}`)
            }
        } else {
            console.log("No data inside the cards_2.json file.");
            callback(new Error("file not found or no data."))
        }
    }, 3 * 1000);
}

module.exports= getCardsByListId;