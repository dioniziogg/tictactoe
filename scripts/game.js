let board = ['','','','','','','','',''];//variables start
let playerTurn = 0;
let players = ['x', 'o'];
let gameOver = false;

function playerMove(position) {//Players moves//change players

  if(gameOver == true) {//if game over true end game
    return;
  }

  if(board[position] == ''){//Check if the square position is empty
    board[position] = players[playerTurn];//adding icon/player move on square position

  gameOver = winVerify();//win condition verify

  if(gameOver == false){//if game over false keep the game
    playerTurn = playerTurn == 1 ? 0:1;//changing players
  }
}
return gameOver;

}
function winVerify(){

  let winCondition = [//win conditions
    [0,1,2],[3,4,5],[6,7,8],//horizontal lines
    [0,3,6],[1,4,7],[2,5,8],//vertical lines
    [0,4,8],[2,4,6]//crossed lines
  ]

  for(let i = 0; i < winCondition.length; i++){//running into win conditions
    let sequence = winCondition[i];

    let posi0 = sequence[0];//check positions by positions
    let posi1 = sequence[1];//check positions by positions
    let posi2 = sequence[2];//check positions by positions

    if(board[posi0] == board[posi1] && board[posi2] == board[posi0] && board[posi0] != ''){
      return true;
    }//check the condition of victory

  }
  return false;

}