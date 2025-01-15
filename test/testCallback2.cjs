/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. 
    Then pass control back to the code that called it by using a callback function.
*/
const getListForBoards = require('../callback2.cjs');

getListForBoards('mcu453ed', (error, result) => {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
});