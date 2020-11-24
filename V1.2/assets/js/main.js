//Descrizione
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//BONUS - Implementazione selezione Livello - 
/*
//All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
var infoLivello, livelloSelezionato, min, max, maxEstrazioni, goGame, randomNumber, userNumber, info, check, youLose , valoriPc, valoriUser;
var arrayBombe =[];
var userArrayNumber =[];
maxEstrazioni = 16;
/**
 * Questa funzione permette di generare un numero random compreso in un intervallo definito tra due numeri interi, min e max
 * @param {int} min 
 * @param {*} max 
 * @returns {int} numero random tra min e max estremi compresi
 */

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Due funzioni similari per avere risultati differenti 

/**
 * Questa funzione effettua in loop un confronto tra gli elementi presenti in un array e l'elemento cercato
 * se c'è corrispondenza e l'elemento cercato si trova nell'array esso restituisce la sua posizione, altrimenti da come valore -1
 * @param {*} arr  è un array che può contenere un qualsiasi elemento, nel caso specifico usato come contenitore di numeri
 * @param {*} getNumber è l'elemento che si confronta e ricerca nell'array  
 * @returns {i} posizione in cui viene individuata la corrispondenza
 * @returns {-1} in tutti i casi in cui non c'è corrispondenza
 */
function arrayChecked(arr, getNumber) {
  var i = 0;
  for (;i < arr.length; i++) {
    if (getNumber === arr[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * Questa funzione effettua in loop un confronto tra gli elementi presenti in un array e l'elemento cercato
 * se c'è corrispondenza e l'elemento cercato si trova nell'array esso restituisce il booleano true, altrimenti false;
 * @param {*} arr  è un array che può contenere un qualsiasi elemento, nel caso specifico usato come contenitore di numeri
 * @param {*} userNumber è l'elemento che si confronta e ricerca nell'array, nel caso specifico il valore fornito dall'utente
 * @returns {true} corrispondenza trovata
 * @returns {false} corrispondenza non trovata
 */
function bombUserChecked(arr, userNumber) {
  for (let j = 0; j < arr.length; j++) {
    if (userNumber == arr[j] ) {
      return true;
    }
  }
  return false;
}
//con setTimeout setto dopo quanto tempo voglio si attivi una data condizione/funzione - 
//con la function(){ location.reload();} - vado ad utilizzare il metodo reload(), sul document, in modo da ricaricare la paggina, come farebbe un reload button

function refresh() {    
    setTimeout(function () {
        location.reload();
    }, 100);
}
infoLivello = alert("Ci sono vari livelli che puoi affrontare, ed ogni livello cambia il range di valori potenzialmente estratti dal pc. Difficoltà 0 => tra 1 e 100 - Difficoltà 1 =>  tra 1 e 80 - Difficoltà 2 => tra 1 e 50.");

livelloSelezionato = Number(prompt("Che livello di difficoltà desideri? [0] [1] o [2]"));
console.log(livelloSelezionato);
goGame = true;
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
    console.log(goGame);
}
console.log(goGame);


if (goGame) {
  /* Soluzione 2 - cilco while */ 
  //1. Il computer deve generare 16 numeri casuali tra 1 e 100.
  
  while (arrayBombe.length < maxEstrazioni) {
    randomNumber = getRandomNumber(min, max);

    //2. I numeri non possono essere duplicati
    if (arrayChecked(arrayBombe, randomNumber) < 0) {
      arrayBombe.push(randomNumber);
    }
  }
  console.log(arrayBombe);
  console.log(arrayChecked(arrayBombe, randomNumber));
  
  //funzionamento verificato
  //3. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
  //4. L’utente non può inserire più volte lo stesso numero.

  info = alert("Ti chiederò di inserire un numero " +  "da " + min + " a " + max + ". Attento ci sono " + maxEstrazioni + " 💣 disseminate, associate a " + maxEstrazioni + " numeri random univoci generati dal pc. ❗❗❗  Accetterò solo valori numerici univoci, senza ripetizioni❗❗❗ . Buona fortuna e che la Forza 🍀 sia con TE 💪");

  //5. L’utente non può inserire più volte lo stesso numero.
  check = -1;
  //6.1 Se il numero è presente nella lista dei numeri generati, la partita termina
  while ((userArrayNumber.length < (max - maxEstrazioni))  && (bombUserChecked(arrayBombe, userNumber) == false) && (userArrayNumber.length !== arrayBombe.length)) {
    userNumber = parseInt(prompt("Inserisci un numero "));
    console.log(userArrayNumber.length);
    console.log(arrayBombe.length);
    
    if (arrayChecked(userArrayNumber, userNumber) < 0 && max >= userNumber && min <= userNumber ) {
      userArrayNumber.push(userNumber);
      console.log(arrayChecked(userArrayNumber, userNumber));
      check +=  1;
      console.log(check);
    } else {
      //6.3 La partita termina quando il giocatore inserisce un numero “vietato” 
      alert("Non hai inserito un valore valido, premi ok e riprova");
       //se non inserisco else - all'utente verrà riproposta di continuo la finestra per l'inserimento di un valore valido sino a che non inserirà valori idonei
    }

    //6.3 altrimenti si continua chiedendo all’utente un altro numero.
    if (bombUserChecked(arrayBombe, userNumber)) {
      alert("💥 " + userNumber + " è una 💣");
    }

    // 6.4 La partita termina quando il giocatoreo raggiunge il numero massimo possibile di numeri consentiti.
  }
  console.log(userArrayNumber);

  //7. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. 
  if (arrayBombe.length == userArrayNumber.length) {
    youWin = alert("Complimenti 🎉🎉🎉 Hai Vinto 🎉🎉🎉, hai evitato tutte le " + maxEstrazioni + " 💣");
  } else if (arrayBombe.length !== userArrayNumber.length) {
    youLose = alert("💥💥 Game Over 💥💥 - Il numero di valori idonei che hai inserito è: " + check + ". Ora ti mostrerò i valori che hai inseriro e quelli generati dal pc: ");
  }

  valoriPc = alert(" Questi sono i valori random univoci che ha generato il pc: " + arrayBombe);
  valoriUser = alert(" Questi sono i valori che hai fornito: " + userArrayNumber);

} else  {
  refresh();
}