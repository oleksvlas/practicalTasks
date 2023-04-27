function ChessBoard(width, height) {
    this.width = width;
    this.height = height;
    this.drawBoard = function() {
      let board = '';
      for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
          if ((row + col) % 2 === 0) {
            board += '#';
          } else {
            board += '@';
          }
        }
        board += '\n';
      }
      console.log(board);
    }
  }
  
  // create dashboard 8x8
  let board8x8 = new ChessBoard(8, 8);
  board8x8.drawBoard();
  