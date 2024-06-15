// let b = document.body
// console.log(b)

// let c = document.head
// console.log(c)

let newEl =document.createElement("h1")
console.log(newEl)

let newText = document.createTextNode("Cybrom")
console.log(newText)

newEl.appendChild(newText)

console.log(newEl)

let di = document.getElementById('main')
di.appendChild(newEl)