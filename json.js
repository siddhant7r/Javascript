// async function demo(){
//     let a=await fetch("https://jsonplaceholder.typicode.com/posts")
//     let r=await a.json()
//     console.log(r);
// }

// demo();

async function demo(){
    let a= await fetch("https://jsonplaceholder.typicode.com/posts")
    let r=await a.json()
    let res= r.map((i)=>{return i.id})
    console.log(res);
}
demo();