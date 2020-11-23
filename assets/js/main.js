//Descrizione
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//1. Il computer deve generare 16 numeri casuali tra 1 e 100.

var pcRandomNumber =[];
var min;
var max;

/* Soluzione 1 - cilco di funzione */ 
//generare una funzione anonima ed associarla ad una variabile, cio mi permette di richiamarla all'inteno della funzione stessa e farla ciclare fino a che la lunghezza dell'array generato non è maggiore del parametro max designato pari al numero di oggetti da far contenere all'arrey
//per interrompere il ciclo definisco il condizionle if e sfrutto il return che blocca l'esecuzione la dove si verifica la condizione
// mediante la variabile randomNumber genero un numero random comprensivo dei suoi estremi di min max, 
//con il secondo condizionele sto imponendo che se il numero generato non è ancora presente nell'array di inserirlo al suo interno
/*
var genArrayUniqueNumbers = function (arr,estrazioni,max,min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (arr.length >= estrazioni) return;
  var  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
  if (pcRandomNumber.indexOf(randomNumber) < 0) {
    pcRandomNumber.push(randomNumber);
  }
  genArrayUniqueNumbers (arr,estrazioni,max,min);
};

//genero tanti pescaggi random ma valido solo quelli che rispettano la condizione di univocità
genArrayUniqueNumbers (pcRandomNumber, 16, 100, 1);
console.log(pcRandomNumber);

/* Soluzione 2 - cilco while */ 

min = 1;
max = 100;
maxEstrazioni = 16;
while (pcRandomNumber.length < maxEstrazioni) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (pcRandomNumber.indexOf(randomNumber) < 0) {
    pcRandomNumber.push(randomNumber);
  }
  console.log(pcRandomNumber);
}

/*
var userArrayNumber =[];
var chiediNumero = parseInt(prompt("Dammi"))

for (let index = 0; index < array.length; index++) {

  const element = array[index];
  
}
*/