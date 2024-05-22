// Random number between and including 1-6
var diceRoll1 = Math.floor(Math.random() * 6) + 1;
var diceRoll2 = Math.floor(Math.random() * 6) + 1;

// Player 1: Select the dice image which corresponds to the dice roll
document.querySelector(".img1").setAttribute("src", "./images/dice" + diceRoll1 + ".png");

// Player 2: Select the dice image which corresponds to the dice roll
document.querySelector(".img2").setAttribute("src", "./images/dice" + diceRoll2 + ".png");

if (diceRoll1 > diceRoll2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (diceRoll2 > diceRoll1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
