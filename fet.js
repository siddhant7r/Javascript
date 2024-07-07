async function fun(){
    let r= await fetch("http://localhost:3000/student")
    let c= await r.json()
    console.log(c);
}

fun()