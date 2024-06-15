let a = document.createElement("p")
console.log(a)

let b =document.createTextNode("This is not a lorem But this is a paragaraph")
console.log(b)

a.appendChild(b)

let bod = document.body
bod.appendChild(a)

a.style.backgroundColor="red"