var dice = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randone = Math.floor((Math.random()*6));
var randtwo = Math.floor((Math.random()*6));
var diceone = "img/" + dice[randone];
var dicetwo = "img/" + dice[randtwo];
var state = document.querySelector(".state");
var p1 = document.querySelector("[name='p1']");
var p2 = document.querySelector("[name='p2']");


document.querySelector("img[alt='diceone']").setAttribute("src", diceone)
document.querySelector("img[alt='dicetwo']").setAttribute("src", dicetwo)

if (randone > randtwo){
    state.textContent = 'Player 1 Wins';
    p1.innerHTML = '<i class="fa-solid fa-crown p-auto posRel"></i>  ' + p1.innerHTML ;
}
else if (randtwo > randone){
    state.textContent = 'Player 2 Wins';
    p2.innerHTML = '<i class="fa-solid fa-crown p-auto posRel"></i>  ' + p2.innerHTML;
}
else if (randone == randtwo){
    state.textContent = 'Seems Like A Tie'
}