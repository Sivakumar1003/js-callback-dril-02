/* 
Problem 6: Write a function that will use the previously written functions to get the following information. 
You do not need to pass control back to the code that called it.
    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/
const getAllInfo = require('../callback6.cjs');

getAllInfo((error) => {
    if (error) {
        console.log(err)
    }
});