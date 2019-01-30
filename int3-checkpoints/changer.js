var colorboi = document.getElementById("colorboi");

var changecolor = document.getElementById("changecolor");

changecolor.addEventListener("click", function(){
    document.body.style.backgroundColor = colorboi.value;
})