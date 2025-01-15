const boards = require('./boards_2.json');

//  function to get boards information by board id.
function boardsInfo(boardId, callback) {
    setTimeout(() => {
        if (boards) {

            //  find the details by board id.
            const board = boards.find((board) => {
                return board.id === boardId;
            });

            //  check board is found or not.
            if(board) {
                return callback(null, board);
            } else {
                return callback (null, `No data matches for this boardId ${boardId}`)
            }
        } else {
            console.log("cannot able to get boards_2.json file");
            return callback(new Error("boards_2.json not find or no data"));
        }
    }, 2000);
}

module.exports = boardsInfo;