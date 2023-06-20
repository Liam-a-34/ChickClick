const pop = new Audio("/sounds/pop.wav")
const achievement = new Audio("/sounds/achievement.wav")
pop.volume = 0.5
let clicks = 0;
let multiplier = 1
let upgrades = 0;

if(localStorage.getItem("clickCount") == null){
    $(".click-count").text("0")
} else {
    $(".click-count").text(localStorage.getItem("clickCount"))
    clicks = parseInt(localStorage.getItem("clickCount"))
}

if(localStorage.getItem("imgUrl") == null){
    $("#main-image").attr("src", "./images/egg.png")
} else {
    $("#main-image").attr("src", localStorage.getItem("imgUrl"))
}

if(localStorage.getItem("font") !== null){
    $(".clicks-div").css("font-family", "EnchantingTable")
} 

$("#main-image").click(function(){
    pop.currentTime = 0;
    pop.play()
    $("#main-image").css("transform", "scale(1.1)")

    var x = Math.random() * ($("#main-image").width());
    var number = $(`<div class="number">${multiplier}</div>`)
    number.css("left", x + "px");
    $(".main-image-div").append(number)
    
    clicks += parseInt(multiplier)
    $(".click-count").text(clicks)

    localStorage.setItem("clickCount", clicks)


    setTimeout(function(){
        $("#main-image").css("transform", "scale(1)")
    }, 100)

    if(clicks == 1000){
        achievement.play()
        $("#main-image").attr("src", "./images/chick.png");
        localStorage.setItem("imgUrl", "./images/chick.png")
        upgrades ++
        localStorage.setItem("upgrades", upgrades)
    }

    if (clicks == 10000 ){
        achievement.play()
        $("#main-image").attr("src", "./images/chicken.png")
        localStorage.setItem("imgUrl", "./images/chicken.png")
        upgrades ++
        localStorage.setItem("upgrades", upgrades)
    }

    if (clicks == 50000 ){
        achievement.play()
        $("#main-image").attr("src", "./images/rawChicken.png")
        localStorage.setItem("imgUrl", "./images/rawChicken.png")
        upgrades ++
        localStorage.setItem("upgrades", upgrades)
    }

    if (clicks == 100000 ){
        achievement.play()
        $("#main-image").attr("src", "./images/furnace.png")
        localStorage.setItem("imgUrl", "./images/furnace.png")
        upgrades ++
        localStorage.setItem("upgrades", upgrades)
    }

    if (clicks == 150000 ){
        achievement.play()
        $("#main-image").attr("src", "./images/cookedChicken.png")
        localStorage.setItem("imgUrl", "./images/cookedChicken.png")
        upgrades ++
        localStorage.setItem("upgrades", upgrades)
    }


})

$(".font-change-button").click(function(){

        if (localStorage.getItem("font") == null) {
          $(".clicks-div").css("font-family", "EnchantingTable");
          localStorage.setItem("font", "Enchanting");
        } else {
          $(".clicks-div").css("font-family", "Minecraft");
          localStorage.removeItem("font");
        }

})

$(".shop-button").click(function(){
    $(".purchase-div").toggleClass("shop-expand")
})