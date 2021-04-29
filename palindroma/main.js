//chiedere all'utente di inserire una parola

var userWord = prompt('Scrivi una parola').toLowerCase()

//verificare se è palindroma

/**
 * ## inversione stringa
 * restitiusce una stringa scritta nel verso opposto
 * @param {string} word
 * @returns {string}
 */
function wordReverse(word) {
    var splitWord = word.split('')
    var reverse = splitWord.reverse()
    var joinWord = reverse.join('')
    
    return joinWord
}

if (userWord === wordReverse(userWord)){
    console.log(`${userWord} è una parola palindroma: ${userWord} | ${wordReverse(userWord)}`);
}else {
    console.log(`${userWord} NON è una parola palindroma: ${userWord} | ${wordReverse(userWord)}`);
}