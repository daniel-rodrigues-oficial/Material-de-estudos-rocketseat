
function Person (name) {
    this.name = name
    this.walk  = function() {
        return this.name +" esta andando"
    }
}

const dani = new Person("dani")
const joao = new Person ("joão")

console.log(dani.walk())
console.log(joao.walk())