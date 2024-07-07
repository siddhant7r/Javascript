async function fun(){
    let r= await fetch("http://localhost:3000/student")
    let c= await r.json()
    let sh=document.getElementById("showdata")
    let d=c.map((e)=>`
    <tr>
        <td> ${e.id}</td>
        <td> ${e.name}</td>
        <td> ${e.city}</td>
    </tr>

    `).join(" ") 

    sh.innerHTML=d

}
fun()