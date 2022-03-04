//separe um texto que contem espaços em um novo array onde cada texto e uma posição 
//do array depois disso transforme o array em um novo texto onde eram espaos

let phrase = "Eu quero comer cuscus"
//splut separa a frase pelo elemento que esta no parentesis
let myArray = phrase.split(" ")
console.log(myArray)
//join junta
let phraseWithUnderscore = myArray.join("-")
console.log(phraseWithUnderscore.toLowerCase())