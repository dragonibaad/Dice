var randomNumber1=Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src","./dice" + randomNumber1 + ".png")
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","./dice" + randomNumber2 + ".png");

if (randomNumber1===randomNumber2) {

    document.querySelector("h1").textContent="DRAW!";
    
}

else if (randomNumber1>randomNumber2) {

    document.querySelector("h1").textContent="PLAYER 1 WINS!";
    
}

else {

    document.querySelector("h1").textContent="PLAYER 2 WINS!";
}