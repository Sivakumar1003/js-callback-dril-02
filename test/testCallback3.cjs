/* 
	Problem 3: Write a function that will return all cards that belong to a particular list 
    based on the listID that is passed to it from the given data in cards.json. 
    Then pass control back to the code that called it by using a callback function.
*/

const getCardsByListId = require('../callback3.cjs');

getCardsByListId ('qwsa221', (error, result) => {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
});