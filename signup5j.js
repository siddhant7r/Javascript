function validate(){
    let a=document.getElementById("name").value
    let b=document.getElementById("email").value
    let c=document.getElementById("contact").value
    let d=document.getElementById("age").value
    let e=document.getElementById("pass").value
    let f=document.getElementById("cpass").value
    
    let g=document.getElementById("form")
    g.style.border="2px,4px,4px,4px"

    if(a==""){
        document.getElementById("name").focus()
        alert("Please Enter your name")
        return false
    }
    else if(b==""){
        document.getElementById("email").focus()
        alert("Please enter your Email")
        return false
    }
    else if(!(b.includes("@"))){
        document.getElementById("email").focus()
        alert("Email must contain @ ")
        return false
    }

    else if(c==""){
        document.getElementById("contact").focus()
        alert("Please enter your Contact no")
        return false
    }
    else if(d==""){
        document.getElementById("age").focus()
        alert("Please enter your Age")
        return false
    }
    else if(e==""){
        document.getElementById("pass").focus()
        alert("Please enter your Pass")
        return false
    }
    else if(f==""){
        document.getElementById("cpass").focus()
        alert("Please confirm your pass")
        return false
    }
    if(e!=f){
        document.getElementById("cpass").focus()
        alert("Please enter same password")
        return false
    }


}