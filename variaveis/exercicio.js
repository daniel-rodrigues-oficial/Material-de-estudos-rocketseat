//declare uma variavel
let weight
//qual o tipo de dado da variavel acima
//undefined
console.log(typeof weight)

let user = {
    name: "daniel",
    age: 20,
    stars: 15.2,
    isSubscribed: false

}

let name = 'dani'
let age = 20
let stars = 4.5
let isSubscribed = false


// 4 a variavel abaixo e de que tipo de dado
let student = {};
//object

//4.1 atribua a ela os mesmos dados da questão 3
let student=  {
    name: 'daniel',
    age: 20,
    weight: 45,
    isSubscribed: false
}

//efaca aparecer no console . log idade peso e nome
console.log(`${student.name} de idade ${student.age} e ${student.weight} kg`)

//5 declare uma variavel de tipo array e nao atribua nada para ela 
let students = []

//students = [
  //  student
//]
 //escreva no console a posicao 0 de array
 console.log(students[0])

 //8 crie um novo student e coloque na posiÇão 1 do array students

 let john ={
     name: 'john',
     age: 15,
     weight: 65,
     isSubscribed: true

 }
students = [
    student,
    john
]

//ou 
students [1] = john