let a= document.querySelector('h1')
a.style.backgroundColor='red'

let b=document.querySelector('.para')
b.style.color="green"

let c=document.querySelector('#head')
c.style.backgroundColor="blue"

let u=document.querySelectorAll('li')
u[1].style.backgroundColor='navy'

let but=document.querySelector('.btn')
// but.addEventListener('click',function(){
//     alert("This is working")
// })

// but.addEventListener('mouseenter',function(){
//     alert("Mouse enter is working")
// })

// but.addEventListener('contextmenu',function(){
//     alert("Contextr Menu is working")
// })

but.addEventListener('dblclick',function(){
    alert("Double Click is working")
})