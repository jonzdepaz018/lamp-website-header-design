var btn = document.getElementById("btn");
var light = document.getElementById("light");
var test = document.getElementById("test");

function togglebtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
}

function toggletest(){
    toggletest.classList.toggle("on");
    light.classList.toggle("on");
}