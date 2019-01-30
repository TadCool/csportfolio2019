var galaga = document.getElementById("galaga");

var invader = document.getElementById("invader");

var display = document.getElementById("display");

galaga.addEventListener("click", function() {
    display.innerHTML = "Galaga was created in the September of 1981. It was an arcade game that was ceated by Namco in Japan. This was the sequel to 1979's 'Galaxian'."
})

invader.addEventListener("click", function() {
    display.innerHTML = "Space Invaders was created in 1978. It was an arcade game that was created by Tomohiro Nishikado in Japan then was licensed to the United States by the Midway division of Bally."

})