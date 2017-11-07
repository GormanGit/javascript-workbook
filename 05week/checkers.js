
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// //1 define move checker as a string of 2 in side an array ['0', '2']-
// //when move piece should move to the blank spot on the board
// //make the grid
// //push pieces to the grid
// //**isLegal function move type and
// //**swap player
// //**check for win


function Checker(color) {
    // was originally (0x125CF)
  if (color === 'white') {
    this.symbol = String.fromCharCode(9786);
    this.color = 'white';
  }
    //was originally (0x125CB)
  else {
    this.symbol = String.fromCharCode(9787);
    this.color = 'black';
  }
}

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = () => {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = () => {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
       // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
        // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
         // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };
  this.populateGrid = () => {
    // loops through the 8 rows
    for (let row = 0; row < 8; row++) {
      // ignores rows which should be empty
      if (row === 3 || row === 4) continue;
      // loops through the 8 columns
      for (let col = 0; col < 8; col++) {
        // sets current color based on the current row
        let color = (row < 3 ? 'white' : 'black');
        // alternates cells to populate with either white or black checkers
        // then pushes checker to array named checkers
        if (row % 2 === 0 && col % 2 === 1) {
          this.grid[row][col] = new Checker(color);
        } else if (row % 2 === 1 && col % 2 === 0) {
          this.grid[row][col] = new Checker(color);
        }
      }
    }
  };

// Your code here
}


function Game() {
    //change playre function
    this.playerTurn = 'black';
    this.changePlayer = () => {
        //is player turn black? then make white, then return black
        this.playerTurn = this.playerTurn === 'black' ? 'white' : 'black';
    }
    this.board = new Board();
    this.start = function () {
        this.board.createGrid();
        this.board.populateGrid();
    }

    this.moveChecker = (x, y) => {
        //splits input sting into an array of strings and then turns string into numbers
        const start = x.split('').map(str => Number(str));
        const end = y.split('').map(str => Number(str));
        // console.log(end);
        if (this.isLegal(start, end)) {
            //move the checker
            this.board.grid[end[0]][end[1]] = this.board.grid[start[0]][start[1]];
            this.board.grid[start[0]][start[1]] = null;

        } else {
            // this.board.grid[start[0]][start[1]] = this.board.grid[end[0]][end[1]];
        }
        this.changePlayer();
        this.isTaken(start, end);

    }
//if(this.board.grid[start[0]][start[1]]){
    this.isLegal = (start, end) => {
        // if(this.board.grid[start[0]][start[1]]){
        // }
        //checking to see if start color === player turn
        if (this.board.grid[start[0]][start[1]].color === this.playerTurn) {
            // console.log(this.board.grid[end[0]][end[1]].color);
        }
        //check for diagonla upward move from a black piece
        if (game.playerTurn === 'black' && end[0] === start[0] - 1) {
            console.log("moving up");
            return true;
            //check for diagonal downward move from a white piece
        }
        if (game.playerTurn === 'white' && end[0] === start[0] + 1) {
            console.log("moving down");
            return true;
            //check to make sure pieces dont move backwards
        } else if ((game.playerTurn !== 'black' && end[0] === start[0] - 1) || (game.playerTurn !== 'white' && end[0] === start[0] + 1)) {
            this.changePlayer();
            console.log("bad move! Please try again");
            return false;
        }

    }
    this.isTaken = (start, end) => {
        if (this.board.grid[end[0]][end[1]]){
            console.log(this.board.grid[end[0]][end[1]])

            // console.log(this.board.grid[end[0]][end[1]].color || this.board.grid[end]);
            // return true;
        }
        // console.log("space taken")
        // return false


        //       this.moveChecker(start,end);
        //   }
        //     // const spotArr = [];
        //     //     spotArr.push(end);
        //     //     console.log(spotArr)
        // }
    }
}
function getPrompt() {
  game.board.viewGrid();
  console.log("It is " + (game.playerTurn) + "'s" + "turn");
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}