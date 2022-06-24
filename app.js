// Menu Burger // 

function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
    navbar.classList.toggle('show-nav');
    })
    }
    toggleMenu();


    // Changement d'image Burger // 
function setNewImage() {
document.getElementById('close').src ="img/painH-removebg-preview.png"
}
function setOldImage() {
    document.getElementById('close').src ="img/painH-close.png"
}


// Ecriture Incurvé //

function drawTextAlongArc(context, str, centerX, centerY, radius, angle){
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2.1);
    context.rotate(-1 * (angle / str.length) / 2);
    for (var n = 0; n < str.length; n++) {
        context.rotate(angle / str.length);
        context.save();
        context.translate(0, -1 * radius);
        var char = str[n];
        context.fillText(char, 0, 0);
        context.restore();
    }
    context.restore();
}

window.onload = function(){
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.font = "25pt Poppins";
context.textAlign = "center";

var centerX = canvas.width / 2;
var centerY = canvas.height - 30;
var angle = Math.PI * 0.6; // radians
var radius = 170;
drawTextAlongArc(context, "Contact me", centerX, centerY, radius, angle);
};