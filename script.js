//game by demnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
var timeLeft = 10;
var a = 0;
var b = 0;
var operation = 0;
/*
1 - +
2 - -
3 - *
4 - /
*/
var btns = [0,0,0,0];
////////////////////////////////////////////////////////////
setInterval(time, 1000);

function time() {
    timeLeft-=1;
    document.getElementById("time").innerHTML = "Осталось времени: "+timeLeft+".";
}
