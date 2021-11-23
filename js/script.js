// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const myGrid = document.querySelector('.game-grid');
// console.log(myGrid);


const playBtn = document.querySelector('.play-button').addEventListener('click', optionSelected);


// Griglia generata se l'utente sceglie la Option Easy dalla Select (100 numeri -> da 1 a 100)
function optionSelected() {
    if(document.getElementById('select-level').value == "easy") {
        myGrid.innerHTML = '';
        for(let i = 1; i <= 100; i++) {
            let thisElement = i;
        
            const thisSquare = document.createElement('div');
            thisSquare.classList.add('square');
            thisSquare.innerHTML = `${thisElement}`;
            
            thisSquare.style.width = 'calc(100% / 10);';
            thisSquare.style.height = 'calc(100% / 10);';
        
            myGrid.appendChild(thisSquare);

            thisSquare.addEventListener('click', function(){
                thisSquare.classList.add('active');
            })
        }
    } 
    else if(document.getElementById('select-level').value == "normal") {
        myGrid.innerHTML = '';
        for(let i = 1; i <= 81; i++) {
            let thisElement = i;
        
            const thisSquare = document.createElement('div');
            thisSquare.classList.add('square');
            thisSquare.innerHTML = `${thisElement}`;
            
            thisSquare.style.width = 'calc(100% / 9);';
            thisSquare.style.height = 'calc(100% / 9);';
        
            myGrid.appendChild(thisSquare);

            thisSquare.addEventListener('click', function(){
                thisSquare.classList.add('active');
            })
        }
    } 
    else if(document.getElementById('select-level').value == "hard") {
        myGrid.innerHTML = '';
        for(let i = 1; i <= 49; i++) {
            let thisElement = i;
        
            const thisSquare = document.createElement('div');
            thisSquare.classList.add('square');
            thisSquare.innerHTML = `${thisElement}`;
            
            thisSquare.style.width = 'calc(100% / 7);';
            thisSquare.style.height = 'calc(100% / 7);';
        
            myGrid.appendChild(thisSquare);

            thisSquare.addEventListener('click', function(){
                thisSquare.classList.add('active');
            })
        }
    }
}



