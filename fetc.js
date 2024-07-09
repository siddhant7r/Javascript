async function fun(){
    let r= await fetch("http://localhost:3000/student")
    let c= await r.json()
    let sh=document.getElementById("showdata")
    let d=c.map((e)=>`
    <tr>
        <td> ${e.id}</td>
        <td> ${e.name}</td>
        <td> ${e.city}</td>
        <td><button onclick="mydelete(${e.id})">Delete </button> </td>
    </tr>

    `).join(" ") 

    sh.innerHTML=d

}
fun()

function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:"DELETE"
    })
    .then(res=>alert("succesfully deleted"))
}

function addd(){
    let data={
        id:document.getElementById('id').value,
        name:document.getElementById('name').value,
        city:document.getElementById('city').value,
    }
    fetch("http://localhost:3000/student",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })


}