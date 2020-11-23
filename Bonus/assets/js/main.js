//Descrizione
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//1. Il computer deve generare 16 numeri casuali tra 1 e 100.

//var pcRandomNumber =[];
//var min, max;

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
console.log(pcRandomNumber);  con l'impiego di funzioni di questo tipo potrei creare pezzi di codice riutilizzabile - funzioni da implementare nelle successive fasi
*/
//BONUS - Implementazione sistemi Livello - 
/*
//All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
var infoLivello, livelloSelezionato, min, max, maxEstrazioni, goGame;

infoLivello = alert("Ci sono vari livelli che puoi affrontare, ed ogni livello cambia il range di valori potenzialmente estratti dal pc. Difficoltà 0 => tra 1 e 100 - Difficoltà 1 =>  tra 1 e 80 - Difficoltà 2 => tra 1 e 50.");

livelloSelezionato = Number(prompt("Che livello di difficoltà desideri? [0] [1] o [2]"));
console.log(livelloSelezionato);
switch (livelloSelezionato) {
  case 0:
    min = 1;
    max = 100;
    console.log(min, max);
    break;
  case 1:
    min = 1;
    max = 80;
    console.log(min, max);
    break;
  case 2:
    min = 1;
    max = 50;
    console.log(min, max);
    break;
  default:
    alert("Non hai correttamente selezionato il livello");
    goGame = false;
}


/* Soluzione 2 - cilco while */ 
//1. Il computer deve generare 16 numeri casuali tra 1 e 100.
var pcRandomNumber =[];
maxEstrazioni = 16;
while (pcRandomNumber.length < maxEstrazioni) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  //2. I numeri non possono essere duplicati
  if (pcRandomNumber.indexOf(randomNumber) < 0) {
    pcRandomNumber.push(randomNumber);
  }
  console.log(pcRandomNumber);
}
//funzionamento verificato
//3. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//4. L’utente non può inserire più volte lo stesso numero.
var userArrayNumber =[];
var userNumber, info, check, valoreTrovato, finePartitaRisultato, valoriPc, valoriUser;

info = alert("Ti chiederò di inserire un numero " +  "da " + min + " a " + max + ". Hai massimo " + maxEstrazioni + " possimilità per indovinare uno tra i " + maxEstrazioni + " numeri random univoci generati dal pc. Attento accetterò solo valori numerici univoci, senza ripetizioni. In caso contrario perderai per inosservanza delle regole");

//5. L’utente non può inserire più volte lo stesso numero.
check = 0;
valoreTrovato = false;
//6.1 Se il numero è presente nella lista dei numeri generati, la partita termina
do {
  userNumber = parseInt(prompt("Inserisci un numero "));
  
  if (userArrayNumber.indexOf(userNumber) < 0 && max >= userNumber >= min) {
    userArrayNumber.push(userNumber);
    check +=  1;
    console.log(check);
  } else {
    //6.3 La partita termina quando il giocatore inserisce un numero “vietato” 
    alert("Non hai rispettato le regole - hai perso"); //se non inserisco else - all'utente verrà riproposta di continuo la finestra per l'inserimento di un valore valido sino a che non inserirà valori idonei
    break;
  }

  //6.3 altrimenti si continua chiedendo all’utente un altro numero.

  for (let j = 0; j < pcRandomNumber.length; j++) {
    if (userNumber == pcRandomNumber[j] ) {
      alert("Complimenti " + userNumber + " è presente nella lista dei numeri generati dal pc");
      valoreTrovato = true;
      //check +=  1;
      //console.log(check); inserendo in questa posizione ed eliminando il break consento alla partita di continuare e posso restituire il numero di volte che l'utente ha indovinato complessivamente fornendo 16 numeri idonei totali
    }
  
  }

  // 6.4 La partita termina quando il giocatoreo raggiunge il numero massimo possibile di numeri consentiti.
} while (userArrayNumber.length < maxEstrazioni && valoreTrovato == false);
console.log(userArrayNumber);

//7. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. 
finePartitaRisultato = alert("Oltre ad aver beccato uno dei valori generati dal pc, sei riuscito a terminare la partita senza infrangere le regole  ed il numero di valori idonei che hai inserito è: " + check + ". Ora ti mostrerò i valori che hai inseriro e quelli generati dal pc: ");

valoriPc = alert(" Questi sono i valori random univoci che ha generato il pc: " + pcRandomNumber);
valoriUser = alert(" Questi sono i valori che hai fornito: " + userArrayNumber);
