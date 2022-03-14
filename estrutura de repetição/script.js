

let pesoas = [
    {
        name: "dani",
        embti: "entj-t"
    },
    {
        name: "mikasa",
        embti: "entjs"
    },
    {
        name: "doli",
        embti: "entj-t"
    }
]

let entjts = pesoas.filter(embti=> embti.embti ==="entj-t");
console.log(entjts)
console.log(entjts.length)
console.log(entjts[1].embti)


let i = 0
while(i <= entjts.length) {
    let a = 0
    console.log(entjts[a].name)
    a++
    i++
}

/*
for(let i = 0; i <= pesoas.length; i++) {
    console.log(pesoas[i].name)
}*/