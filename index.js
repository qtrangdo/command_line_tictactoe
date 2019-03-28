const promt = require('prompt');

const TicTacToe = function() {
  this.board = [[1,2,3],[4,5,6],[7,8,9]];
  this.currentPlayer = 'x';
  this.moves = 0
}

TicTacToe.prototype.printBoard = function() {
  console.log(`${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}`);
  console.log('__________________')
  console.log(`${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]}`);
  console.log('__________________')
  console.log(`${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}`);
}

TicTacToe.prototype.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
}

TicTacToe.prototype.promptPlayerMove = function() {
  var move; 
  do {
    move = prompt.question(`Player ${this.currentPlayer}, it's your turn! Please choose a move (1-9): `);
  } while(!this.checkValidMove(move));
  return this.convertToRowCol(move);
}

TicTacToe.prototype.placeMove = function(row, col) {
  this.board[row][col] = this.currentPlayer;
  this.moves++;
}

TicTacToe.prototype.checkValidMove = function(move) {
  move = Number(move);
  if(move > 9 || move < 1) {
    console.log('number must be between 1 and 9');
    return false;
  } else if (Math.floor(move) !== move) {
    console.log('number must be an integer');
    return false;
  } else if(this.isPositionOccupied(move)) {
    console.log('that position is already occupied');
    return false;
  } else return true;
}

TicTacToe.prototype.isPositionOccupied = function(move) {
  var {row, col} = this.convertToRowCol(move);
  return typeof this.board[row][col] === 'string';
}


TicTacToe.prototype.isWin = function() {
  if (this.isRowWin() || this.isColWin() || this.isDiagonalWin()) {
    return true;
  }
  return false;
}

TicTacToe.prototype.isRowWin = function() {
  for (let row of this.board) {
    if (row[0] === row[1] === row[2]) return true;
  }
  return false;
}

TicTacToe.prototype.isColWin = function() {
  for (let col of this.board[0]) {
    if(this.board[0][col] === this.board[1][col] === this.board[2][col]) return true;
  }
  return false;
}

TicTacToe.prototype.isDiagonalWin = function() {
  if ((this.board[0][0] === this.board[1][1] === this.board[2][2]) || 
      (this.board[0][2] === this.board[1][1] === this.board[2][0])) {
        return true;
  }
  return false;
}

TicTacToe.prototype.isDraw = function() {
  return this.moves === 9;
}

var game = new TicTacToe();
game.play();