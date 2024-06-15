function fun(){
    alert("Event is Working")
}

function red(){
    document.body.style.backgroundColor="red"
    document.body.style.color="red"
}

function green(){
    document.body.style.backgroundColor="green"
    document.body.style.color="green"
}

function yellow(){
    document.body.style.backgroundColor="yellow"
    document.body.style.color="yellow"
}
function purple(){
    document.body.style.backgroundColor="purple"
    document.body.style.color="purple"
}

function pdis(){
   let a = document.getElementsByTagName('p')
    a[0].style.display="block"
}

function pgone(){
    let b=document.getElementById('m1')
    b.style.display="none"
}


/*if class is given to p as in <p class= "main">
 in js
 function show(){
    let a = document.getElementById('main')
    a.style.display="block"
    
 }

 */