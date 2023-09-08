

var randomNumber1 = Math.floor(Math.random()*6+1)
var image1 = "/images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random()*6+1)
var image2 = "/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",image1)
document.querySelectorAll("img")[1].setAttribute("src",image2)

if (image1 > image2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (image1 > image2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}