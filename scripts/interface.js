document.addEventListener('DOMContentLoaded', () => {//waiting for DOMContentLoaded/load page

  let squares = document.querySelectorAll(".square");//running into all squares

  squares.forEach((square) => {
    square.addEventListener('click', clickMouse);
  })

})

function clickMouse(event) {

  let square = event.target;
  let position = square.id;//selected square
  
  if(playerMove(position)){//end game

    setTimeout(() => {
      alert("The game is over!");
    }, 5)
  }
  updateSquares();//updateScreen with icons add to squares 

}

function updateSquares() {//updateScreen with icons add to squares 

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {//adding icons on squares
    let position = square.id;
    let players = board[position];

    if(players != ''){//add icon on square
      square.innerHTML = `<i class='${players}'></i>`
    }
  })

}
function restartGame(){//reload page
    
  restartGame = location.reload();

}