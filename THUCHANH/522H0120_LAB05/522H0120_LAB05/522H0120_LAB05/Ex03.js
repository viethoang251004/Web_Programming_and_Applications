$(document).ready(() => {
    $("body").append('<div id="my-rgb"class="w-25 text-center mx-auto alert alert-success">Hover a cell</div>')

    let panel = $("<div id='panel'>")
    let colorclick;
    let flag = -1;
    for (let i = 1; i <= 100; i++){
        let r = Math.round(Math.random() * 255) 
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)

        let cell = $(`<div style="background-color: rgb(${r}, ${g}, ${b})"></div>`) 
        panel.append(cell)
    }

    $("body").append(panel) 
    $("body").append('<div style="display: none; font-size: 20px" id="my-alert"class="w-50 text-center mx-auto alert alert-success">The background color has been changed</div>')

    $('#panel div').on("mouseover", function(){
        let color = $(this).css('background-color')
        $('body').css('background-color', color) 
        $('#my-rgb').text(color)
    })

    $('#panel div').on("click", function(){
        $('#my-alert').fadeIn(1000); 
        setTimeout(function(){
            $('#my-alert').fadeOut(1000); 
        }, 2000) 

        colorclick = $(this).css('background-color')
        flag = 1;
    })

    $('#panel').on('mouseleave', function(){
        if (flag == 1){
            $('body').css('background-color', colorclick) 
            $('#my-rgb').text(colorclick)
        }
    })
    $('#my-rgb').on("click", function(){
        var data = $(this).text();
        navigator.clipboard.writeText(data)
        .then(function() {
            alert("Success: " + data);
        })
        .catch(function(error) {
            console.error('Error: ', error);
        });
    })
})
