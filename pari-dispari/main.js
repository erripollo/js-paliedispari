//L’utente sceglie pari o dispari

userSelect = prompt('Scegli pari o dispari').toLowerCase();

if (userSelect != "pari" && userSelect != "dispari") {
    alert("La scelta non è giusta! devi scegliere pari o dispari!")
}

//e inserisce un numero da 1 a 5.
var userNumber = Number(prompt('scegli un numero da 1 a 5'));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var pcNumber = getRandomInteger(1, 5);

//console.log(userNumber, pcNumber);

//Sommiamo i due numeri 
var sum = userNumber + pcNumber;
//console.log(sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function even(number) {
    if (number % 2 === 0) {
       return 'pari';
    }

    return 'dispari';
}

//Dichiariamo chi ha vinto.
if (even(sum) === userSelect) {
    console.log(`La somma ${sum} è ${even(sum)}. Hai vinto!!!`);
}else {
    console.log(`La somma ${sum} è ${even(sum)}. Hai perso :(`);
}