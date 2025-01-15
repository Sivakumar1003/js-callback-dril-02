/* 
    Problem 1: Write a function that will return a particular board's information based on the boardID 
    that is passed from the given list of boards in boards.json and 
    then pass control back to the code that called it by using a callback function.
*/
const boardsInfo = require('../callback1.cjs');

boardsInfo('mcu453ed', (error, result) => {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
});