

$("#main-image").click(function(){
    $("#main-image").css("transform", "translate(-50%, -50%) scale(1.1)")
    setTimeout(function(){
        $("#main-image").css("transform", "translate(-50%, -50%) scale(1)")
    }, 100)
})