//manipulando array
let techs = ["html", "css", "js"]
//adicionar um item no fim
console.log(techs.push("node js"))
//adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou + itens em qualquer posição
//qual elemento e quantos elementos
techs.splice(1, 2)
//encontrar a posição de um elemento no array
let index = techs.indexOf('html')

console.log(index)
console.log(techs)