function validate(){
    let na=document.getElementById("name").value
    let co=document.getElementById("contact").value
    let em=document.getElementById("email").value
    let pass=document.getElementById("pass").value
    let cpass=document.getElementById("cpass").value

    if(na==""){
        alert("Please enter your name")
        document.getElementById("name").focus()
        return false
    }
    else if(co==""){
        alert("Please enter your Contact ")
        document.getElementById("contact").focus()
        return false
    }
    else if(isNaN(co)){
        alert("Only digits")
        document.getElementById("contact").focus()
        return false
    }

    //  if(co<=999999999 || co>=10000000000){
    //      alert("only 10 Digit no are allowed")
    //      document.getElementById("contact").focus()
    //      return false
    //  }

    else if(co.length!=10){
        alert("Only 10 digits is required")
        document.getElementById("contact").focus()
        return false
    }
    else if(em==""){
        alert("Please Enter your Email")
        document.getElementById("email").focus()
        return false
    }

     else   if(!(em.includes("@"))){
         alert("Please enter @ email")
         document.getElementById("email").focus()
         return false
     }

     else if(!(pass.match(/[!@#$%^&*()]/)))
        {
            alert("Please enter one special character")
            document.getElementById("pass").focus()
            return false
        }
    
        else if(pass!=cpass){
            alert("Password is not matching")
            document.getElementById("cpass").focus()
            return false
        }
        
}