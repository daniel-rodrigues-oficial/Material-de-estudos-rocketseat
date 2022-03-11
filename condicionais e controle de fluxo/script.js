//throw
//try cat
function sayMyName(name = '') {
    if(name === '') {
        throw new Error("nome é necessario")
    }
    console.log(name)
}

try {
    sayMyName('dani')
} catch(e) {
    console.log(e)
}
console.log('apos a função de erro')