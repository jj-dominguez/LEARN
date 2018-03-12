// var player1 = prompt("Player 1, what is your name?");
// var player2 = prompt("Player 2, what is your name?");

var p1Wins = document.getElementById('p1Wins')
var p2Wins = document.getElementById('p2Wins')

var gameState = {
  PLAYER_ONE: 'X',
  PLAYER_TWO: 'O',
  currentPlayer: 'X',
  board: [
    "","","","","","","","",""
  ],
  player1Wins: 0,
  player2Wins: 0,
  winLimit: 3
}

function checkForWinner(){
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  var winner = false
  winningCombos.find(function(combo){
    if(gameState.board[combo[0]] == gameState.board[combo[1]] && gameState.board[combo[1]] == gameState.board[combo[2]]){
      winner = gameState.board[combo[0]]
      return winner
    }
  })
  return winner
}

function handleClick(index){
  if(gameState.board[index] == ''){
    gameState.board[index] = gameState.currentPlayer
    gameState.currentPlayer = gameState.currentPlayer == gameState.PLAYER_ONE ? gameState.PLAYER_TWO : gameState.PLAYER_ONE

    let winner = checkForWinner()
    if(winner){
      alert(`${winner} is the winner!`)
      gameState.gameWinner = winner
      render(gameState)
      // p1Wins.innerHTML = gameState.player1Wins.value
      // p2Wins.innerHTML = gameState.player2Wins.value
      //
      if (gameState.gameWinner == "X"){
          gameState.player1Wins ++;
          p1Wins.innerHTML = gameState.player1Wins;
          if (gameState.player1Wins >= 3){
              alert("Game over! Player 1 Wins")
          }
      } else {
          gameState.player2Wins ++;
          p2Wins.innerHTML = gameState.player2Wins;
          if (gameState.player2Wins >= 3){
              alert("Game over! Player 2 Wins")
          }
      }
    }
    render(gameState)
  }
}


function render(state){
  var renderedHtml = "<div class='board'>" +
    "<div class='square' onclick='handleClick(0)'>" +state.board[0]+ "</div>" +
    "<div class='square' onclick='handleClick(1)'>" +state.board[1]+ "</div>" +
    "<div class='square' onclick='handleClick(2)'>" +state.board[2]+ "</div>" +
    "<div class='square' onclick='handleClick(3)'>" +state.board[3]+ "</div>" +
    "<div class='square' onclick='handleClick(4)'>" +state.board[4]+ "</div>" +
    "<div class='square' onclick='handleClick(5)'>" +state.board[5]+ "</div>" +
    "<div class='square' onclick='handleClick(6)'>" +state.board[6]+ "</div>" +
    "<div class='square' onclick='handleClick(7)'>" +state.board[7]+ "</div>" +
    "<div class='square' onclick='handleClick(8)'>" +state.board[8]+ "</div>" +
  "</div>"

  document.querySelector(".render-target").innerHTML = renderedHtml
}

render(gameState)

function reset() {
    gameState.board = [
        "","","","","","","","",""
      ]
    render(gameState)
}

if (gameState.player1Wins > 3 || gameState.player2Wins > 3) {
    alert("Gameover")
}
