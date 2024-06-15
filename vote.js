let a= parseInt(prompt("Enter your age"))

if(a>=18){
    let b= parseInt(prompt("Press 1 for Indian"))
    if(b==1){
        alert("You are Elligible to vote")
    }
    else{
        alert("You aren't elligible to vote")
    }
}
else{
    alert("You are underage")
}