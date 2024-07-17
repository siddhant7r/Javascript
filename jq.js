$(document).ready(function(){
    let a= $('.head').html()
    console.log(a);

$('.head').css({"background-color":"red" , "color" :"white" })  
    
$('#btn').click(function(){
    alert("Hello")


        })

$('#btn1').click(function(){
    $('#head2').fadeOut(2000)
})

    $('#btn2').click(function(){
        $('#head2').fadeIn(2000)
    })

    $('#btn3').click(function(){
        $('#head2').fadeToggle(2000)
    })

    $('#slide1').click(function(){
        $('#head2').fadeOut(2000)
    })
    
        $('#slide2').click(function(){
            $('#head2').fadeIn(2000)
        })
    
        $('#slide3').click(function(){
            $('#head2').fadeToggle(2000)
        })

})