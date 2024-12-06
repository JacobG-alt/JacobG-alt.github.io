/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = '🤬';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
        
    
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === '🤬' ? '👹' : '🤬';
    win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `Egalite!` : win ? `${win} a gagne la partie!` : `Cest le tour a ${turn}!`;
    pointage()
    };

init();

function mailto() 
{
    //fonction pour diriger vers mail
  window.open("mailto:jacobgravel@outlook.fr");

}

//var pour pointage
let alexis = 0;
let demon = 0;


 
function pointage()
{
    //fonction pour ajouter le pointage au gagnant de la round  
    let alexispointage = document.getElementById('alexispointage');
    let demonpointage = document.getElementById('demonpointage');


    
    if(win == "🤬")
    {
       alexis++;
       alexispointage.innerHTML = alexis;
    }
    else if (win == "👹")
    {  
       demon++;
       demonpointage.innerHTML = demon;
    }
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.showModal();     

