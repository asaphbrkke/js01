document.getElementById("demo").innerHTML = "Asaph";
function aumentar() {
    document.getElementById("demo").style.fontSize = "35px";
}
function diminuir() {
    document.getElementById("demo").style.fontSize = "10px";
}
function color1() {
    document.getElementById("demo").style.color = "pink";
}
function color2() {
    document.getElementById("demo").style.color = "white";
}
function color3() {
    document.getElementById("demo").style.color = "red";
}
function ligar(){
    document.getElementById("lampada").src = "img/acesa.png";
}
function desligar(){
    document.getElementById("lampada").src = "img/apagada.png";
}
function quebrar(){
    document.getElementById("lampada").src = "img/quebrada.png";
}
