
//for in

let person = {
    name:'dani',
    age: 12,
    height: 20
}

let pesoas = [
    {
        name: "dani",
        embti: "entj-t"
    },
    {
        name: "mikasa",
        embti: "entjs"
    }
]


for(let property in person) {
    console.log(property)
    console.log(person[property])
}
/*
let i = 0
for(let property in pesoas[i].embti) {
    console.log(property)
    //console.log(person[property])
    i++
}
*/