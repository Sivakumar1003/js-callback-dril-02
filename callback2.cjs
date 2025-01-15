const lists = require('./lists_1.json');

//  function to all lists based on board id.
function getListForBoards (boardId, callback) {
    setTimeout(() => {
        if (lists) {

            //  check board id match in the lists.
            if (lists.hasOwnProperty(boardId)) {
                return callback(null, lists[boardId]);
            } else {
                return callback( null, `No lists found in this board id ${boardId}`);
            }
        } else {
            console.log("no data inside lists_1.json file or no data.");
            return callback(new Error("lists.json file not found or no data."));
        }
    }, 2 * 1000);
}

module.exports = getListForBoards;