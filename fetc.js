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
        <td><button onclick="myupdate(${e.id})">Edit </button> </td>
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

// var storeid = 0
// function myupdate(id){
//     storeid=id;
//     document.getElementById("myfrm").style.display="block"
//     document.getElementById("id1").value=id
// }

// function update(){
//     let mydata={
//         id:document.getElementById('id1').value,
//         name:document.getElementById('name1').value,
//         city:document.getElementById('city1').value,
//     }
//     fetch(`http://localhost:3000/student/${storeid}`,{
//        method:"PUT",
//        headers:{
//         'Content-type':'application/json'
//        },
//        body:JSON.stringify(mydata) 
//     })
//     .then(res=>alert("Edit Succesfully"))
//     .catch(res=>alert("Errror"))
// }

var stid=0
async function myupdate(id){
    stid=id
    let mydata = await fetch(`http://localhost:3000/student/${id}`)
    let con = await mydata.json()

    let show=document.getElementById('myfrm')
    let y=`
    <input type="text" value="${con.id}" id="id1" > <br>
    <input value="text" value="${con.name}" id="name1"> <br>
    <input value="text" value="${con.city}" id="city1"> <br>
    <input value="submit" onclick="edit()" value="update">
    `
    show.innerHTML=y
}

function edit(){
    let myddd={
        id:document.getElementById('id1').value,
        name:document.getElementById('name1').value,
        city:document.getElementById('city1').value
    }
    fetch(`http://localhost:3000/student/${stid}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(myddd)
    })
    .then(res=>alert("Edit done"))
    .catch(res=>alert("Error"))
}

