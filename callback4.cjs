const boardsInfo = require('./callback1.cjs');
const getListForBoards = require('./callback2.cjs');
const getCardsByListId = require('./callback3.cjs');

function getAllInfo(callback) {
    setTimeout(() => {

        //  call the boards function.
        boardsInfo('mcu453ed', (error, boardsResult) => {
            if (error) {
                callback(error);
            } else {
                console.log(boardsResult);

                //  call the gets list function.
                getListForBoards('mcu453ed', (error, listsResult) => {
                    if (error) {
                        callback(error);
                    } else {
                        console.log(listsResult);
                        let listId = listsResult.find(list => {
                            return list["name"] == 'Mind';
                        });

                        //  calls get card function only for Mind.
                        getCardsByListId(listId["id"], (error, cardsResult) => {
                            if (error) {
                                callback(error);
                            } else {
                                console.log(cardsResult);
                            }
                        });
                    }
                });
            }
        });
    }, 2 * 1000);
}

module.exports = getAllInfo;