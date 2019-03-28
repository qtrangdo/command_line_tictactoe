const promt = require('prompt');

const TicTacToe = function() {
  this.board = [[1,2,3],[4,5,6],[7,8,9]];
  this.currentPlayer = 'x';
  this.moves = 0
}

TicTacToe.prototype.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
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

TicTacToe.prototype.convertToRowCol = function(move) {
  var row = Math.floor((move - 1)/3);
  var col = (move - 1) % 3;
  return {row, col};
}

var game = new TicTacToe();
game.play();