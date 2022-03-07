
//grouping operator

let pao = false
let queijo = false

//const niceBreakFest = pao && queijo ? 'cafe top' : 'cafe ruim'
const niceBreakFest = pao || queijo ? 'cafe top' : 'cafe ruim'
console.log(niceBreakFest)

//verificar se e maior de 18

let age = 20

const checkAge = age >= 18 ? 'maior' : 'menor'
console.log(checkAge)