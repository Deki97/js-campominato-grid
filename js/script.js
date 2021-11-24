// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.




// Assegno al bottone un evento al click, secondo il quale richiama il risultato della funzione optionSelected
const playBtn = document.getElementById('play-button').addEventListener('click', startGame);


// Griglia generata se l'utente sceglie la Option Easy dalla Select (100 numeri -> da 1 a 100)
function startGame() {
    // Seleziono dall'html il grid principale che conterrà poi tutti i quadratini
    const myGrid = document.getElementById('grid');
    myGrid.innerHTML = '';

    // Vado a prendermi la scelta dell'utente per capire che tipo di griglia devo generare, in base al valore della Select
    const levelSelected = document.getElementById('select-level').value;
    // console.log(levelSelected);

    // Ora che ho preso il valore della select devo capire quanti box andare a creare e che dimensione devono avere in base alla griglia
    // Quindi creo due variabili, una che conterrà il numero di box, e una con la dimensione di ogni singolo box
    let maxSquareNum;
    let thisSquareDimension;

    // In base al valore della select creo tot quadratini che avranno tot dimensioni
    if(levelSelected === 'easy'){
        maxSquareNum = 100;
        thisSquareDimension = 10;
    } else if(levelSelected === 'normal'){
        maxSquareNum = 81;
        thisSquareDimension = 9;
    } else if(levelSelected === 'hard'){
        maxSquareNum = 49;
        thisSquareDimension = 7;
    }

    for(let i = 1; i <= maxSquareNum; i++){
        const newGeneratedSquare = createThisSquare(i, thisSquareDimension);

        newGeneratedSquare.addEventListener('click', handleSquareClick);

        myGrid.appendChild(newGeneratedSquare);
        
    }
    // if(document.getElementById('select-level').value == "easy") {
    //     myGrid.innerHTML = '';
    //     for(let i = 1; i <= 100; i++) {
    //         let thisElement = i;
        
    //         const thisSquare = document.createElement('div');
    //         thisSquare.classList.add('square');

    //         thisSquare.style.width = 'calc(100% / 10)';
    //         thisSquare.style.height = 'calc(100% / 10)';

            

    //         thisSquare.innerHTML = `${thisElement}`;
        
    //         myGrid.appendChild(thisSquare);

    //         thisSquare.addEventListener('click', function(){
    //             thisSquare.classList.add('active');
    //         })
    //     }
    // } 
    // else if(document.getElementById('select-level').value == "normal") {
    //     myGrid.innerHTML = '';
    //     for(let i = 1; i <= 81; i++) {
    //         let thisElement = i;
        
    //         const thisSquare = document.createElement('div');
    //         thisSquare.classList.add('square');
    //         thisSquare.innerHTML = `${thisElement}`;
            
    //         thisSquare.style.width = 'calc(100% / 9)';
    //         thisSquare.style.height = 'calc(100% / 9)';
        
    //         myGrid.appendChild(thisSquare);

    //         thisSquare.addEventListener('click', function(){
    //             thisSquare.classList.add('active');
    //         })
    //     }
    // } 
    // else if(document.getElementById('select-level').value == "hard") {
    //     myGrid.innerHTML = '';
    //     for(let i = 1; i <= 49; i++) {
    //         let thisElement = i;
        
    //         const thisSquare = document.createElement('div');
    //         thisSquare.classList.add('square');
    //         thisSquare.innerHTML = `${thisElement}`;
            
    //         thisSquare.style.width = 'calc(100% / 7)';
    //         thisSquare.style.height = 'calc(100% / 7)';
        
    //         myGrid.appendChild(thisSquare);

    //         thisSquare.addEventListener('click', function(){
    //             thisSquare.classList.add('active');
    //         })
    //     }
    // }
}



// Funzione che al click del singolo box aggiunge la classe active con sfondo blu e colore del testo bianco
function handleSquareClick(){
    this.classList.add('active');
}



// Funzione che crea ogni singolo box all'interno del grid principale
function createThisSquare(squareNumber, squareDimension) {
    const thisSquare = document.createElement('div');
    thisSquare.classList.add('square');
    thisSquare.innerHTML = `<span>${squareNumber}</span>`;

    thisSquare.style.width = `calc(100% / ${squareDimension})`;
    thisSquare.style.height = `calc(100% / ${squareDimension})`;

    return thisSquare;
}



