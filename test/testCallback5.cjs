/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/
const getAllInfo = require('../callback5.cjs');

getAllInfo((error) => {
    if (error) {
        console.log(error)
    }
});