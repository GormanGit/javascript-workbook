'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let playerTurn = 'X';
let playerOne = 'X';
let playerTwo = 'O';

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    return ((board[0][0] === playerOne && board[0][1] === playerOne && board[0][2] === playerOne) || (board[1][0]
        === playerOne && board[1][1] === playerOne && board[1][2] === playerOne) || (board[2][0] === playerOne
        && board[2][1] === playerOne && board[2][2] === playerOne) || (board[0][0] === playerTwo && board[0][1]
        === playerTwo && board[0][2] === playerTwo) || (board[1][0] === playerTwo && board[1][1] === playerTwo &&
        board[1][2] === playerTwo) || (board[2][0] === playerTwo && board[2][1] === playerTwo && board[2][2] === playerTwo))
}

function verticalWin() {
    return ((board[0][0] === playerOne && board[1][0] === playerOne && board[2][0] === playerOne) || (board[0][1]
        === playerOne && board[1][1] === playerOne && board[2][1] === playerOne) || (board[0][2] === playerOne
        && board[1][2] === playerOne && board[2][2] === playerOne) || (board[0][0] === playerTwo && board[1][0]
        === playerTwo && board[2][0] === playerTwo) || (board[0][1] === playerTwo && board[1][1] === playerTwo &&
        board[2][1] === playerTwo) || (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo))
}

function diagonalWin() {
    return ((board[0][0] === playerOne && board[1][1] === playerOne && board[2][2] === playerOne) || (board[2][0]
        === playerOne && board[1][1] === playerOne && board[0][2] === playerOne) || (board[0][0] === playerTwo && board[1][1]
        === playerTwo && board[2][2] === playerTwo) || (board[2][0] === playerTwo && board[1][1] === playerTwo &&
        board[0][2] === playerTwo))

}

function checkForWin() {
    return (diagonalWin() || verticalWin() || horizontalWin())

}
// Check for a valid spot on the board
//   Only accept intigers, 0-2
//Check for empty space
//   Not already filled with 'X' or 'O'
//If both are true then place a marker.
// Player one is “X” will start by entering a position based on the board and then go to player'O'
// This position will no longer be a valid move.
// If same position is tried a message will be given of “..........”
// Check for win
//  Check for win horizontal
//  check for win vertical
// Check diagonal win
// If no win then change player turn.
// if win. return You Won.. ==> reset board.
//

const userInputIsValid = (row, column) => {
    return (row < 3 && row >= 0) && (column < 3 && column >= 0)
}

const isSpaceEmpty = (row, column) => {
    const space = board[row][column];
    return (space !== 'X' && space !== 'O')
}
const placeAMarker = (row, column) => {
    if (isSpaceEmpty(row, column) === true){
        return board[row][column] = playerTurn
        // console.log(board)
    }else {
        console.log("This is not a valid play.");
    }
}

function ticTacToe(row, column) {
    if (userInputIsValid(row, column) && isSpaceEmpty(row, column)) {
        placeAMarker(row, column)
    }
    // if (isSpaceEmpty(row, column) === board['X', 'O']['X', 'O']){
    //     board[row][column] = playerTurn;
    // } else {
    //     console.log("This is not a valid play Player " + playerTurn + " choose another location on the board.");
    // }
    // if (checkForWin()){
    //     console.log("Player" + playerTurn + " has just won the game!");
    // }
    if (playerTurn === 'X') {
        playerTurn = 'O';
    } else {
        playerTurn = 'X';
    }

}

//ticTacToe();

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
            ticTacToe(row, column);
            getPrompt();
        });
    });

}


// Tests

if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
        it('should place mark on the board', () => {
            ticTacToe(1, 1);
            assert.deepEqual(board, [[' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
        });
        it('should alternate between players', () => {
            ticTacToe(0, 0);
            assert.deepEqual(board, [['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
        });
        it('should check for vertical wins', () => {
            board = [[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', () => {
            board = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', () => {
            board = [['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', () => {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
