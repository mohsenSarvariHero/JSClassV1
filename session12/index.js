// let helloBtn = document.querySelector(".hello");
// helloBtn.addEventListener("click",hell)

// function hell(){
//     alert("hello")
// }

const cells = document.querySelectorAll(".cell");
// console.log(cells);
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;
initializeGame()

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){//options = ['x','o','','o','x','','x','o','']
        return ;

    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index]= currentPlayer;//options = ['x','o','X','o','x','','x','o','']
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X")? "O" : "X";//current = x
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false

    for(let i = 0 ; i < winConditions.length; i++ ){//options = ['x','o','X','o','x','','x','o','']
        const condition = winConditions[i];//[2,4,6]
        const cellA = options[condition[0]]; //options = ['x','o','X','o','x','','x','o','']
        const cellB = options[condition[1]]; 
        const cellC = options[condition[2]]; 
        
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
    }else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent="");
    // running = true;
}


//gpt
// const cells = document.querySelectorAll('.cell');
// const statusText = document.getElementById('status');
// const restartButton = document.getElementById('restart');

// let currentPlayer = 'X';
// let gameActive = true;
// let board = ["", "", "", "", "", "", "", "", ""];

// const winConditions = [
//   [0,1,2], [3,4,5], [6,7,8], // rows
//   [0,3,6], [1,4,7], [2,5,8], // columns
//   [0,4,8], [2,4,6]           // diagonals
// ];

// function handleCellClick(e) {
//   const index = e.target.dataset.index;

//   if (board[index] !== "" || !gameActive) {
//     return;
//   }

//   board[index] = currentPlayer;
//   e.target.textContent = currentPlayer;

//   if (checkWinner()) {
//     statusText.textContent = `${currentPlayer} wins! 🎉`;
//     gameActive = false;
//   } else if (board.includes("")) {
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     statusText.textContent = `It's ${currentPlayer}'s turn`;
//   } else {
//     statusText.textContent = "It's a Draw! 🤝";
//     gameActive = false;
//   }
// }

// function checkWinner() {
//   return winConditions.some(condition => {
//     const [a, b, c] = condition;
//     return board[a] && board[a] === board[b] && board[a] === board[c];
//   });
// }

// function restartGame() {
//   currentPlayer = 'X';
//   board = ["", "", "", "", "", "", "", "", ""];
//   gameActive = true;
//   statusText.textContent = `It's ${currentPlayer}'s turn`;
//   cells.forEach(cell => cell.textContent = "");
// }

// cells.forEach(cell => cell.addEventListener('click', handleCellClick));
// restartButton.addEventListener('click', restartGame);

// statusText.textContent = `It's ${currentPlayer}'s turn`;
