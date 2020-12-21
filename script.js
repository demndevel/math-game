//game by demnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
var timeLeft = 10;
var a = 0;
var b = 0;
var result = 0;
var operation = 0;
var strOperation = "";
var score = 0;
var RegExpObject = new RegExp("e");
var rWillBe = 0;
//1 - +    2 - -     3 - *

var btns = [0,0,0,0];

setInterval(time, 1000);
start()

var final = document.getElementById("final");
final.style.display = 'none';
game = document.getElementById("game")
function time() {
    timeLeft-=1;
    document.getElementById("time").innerHTML = "Осталось времени: "+timeLeft+"."+"Очки: "+score+".";
    if(time <1){
        fail();
    }
}
function start() {
    operation = rnd(3);
    a = rnd(100);
    b = rnd(100);
    rWillBe = rnd(3)
    switch(operation){
        case 0:
            strOperation = "+";
            break;
        case 1:
            strOperation = "-";
            break;
        case 2:
            strOperation = "*";
            break;
    }
    if(strOperation=="*"){
        a = rnd(20);
        b = rnd(20);
    }
    else{
        a = rnd(100);
        b = rnd(100);
    }
    
    result = eval(a+strOperation+b);
    document.getElementById("q").innerHTML = 'Сколько будет: '+a+strOperation+b+"?";
    console.log(result);
    if(rWillBe ===1){
        document.getElementById("1").innerHTML = eval(a+strOperation+b);
        
        document.getElementById("2").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("3").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("4").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
    }
    else if(rWillBe === 2){
        document.getElementById("2").innerHTML = eval(a+strOperation+b);

        document.getElementById("1").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("3").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("4").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
    }
    else if(rWillBe === 3){
        document.getElementById("3").innerHTML = eval(a+strOperation+b);

        document.getElementById("2").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("1").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("4").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
    }
    else {
        document.getElementById("4").innerHTML = eval(a+strOperation+b);

        document.getElementById("2").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("3").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
        document.getElementById("1").innerHTML = eval(Math.floor(Math.random()*((result+20)-(result-20)+(result-20))));
    }
    
    
    
    
}
function rnd(x){
    return Math.floor(Math.random()*Math.floor(x));
}
function next(num) {
    console.log(result);
    rResult = document.getElementById(num+'').innerHTML;
    if(rResult == result){
        score+=1;
        time();
        timeLeft = 10;
        start();
    }
    else {
        fail();
    }
    
}
function fail() {
    game.style.display = 'none';
    final.style.display = 'block';
    document.getElementById("score").innerHTML = "Вы програли! Ваши очки: "+ score;
}
function restart(){
    game.style.display = 'block';
    final.style.display = 'none';
    time();
    start();
    score = 0;
    time = 10;
}