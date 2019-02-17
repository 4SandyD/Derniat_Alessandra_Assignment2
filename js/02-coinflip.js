/*eslint-env browser*/

//var coinFlip = (Math.random())*100;
////    alert(coinFlip); //for testing purposes
//var choice = prompt("Select heads or tails");
//
//if (coinFlip <= 50) {
//    var result = "heads";
//}
//else if (coinFlip > 50) {
//    var result = "tails";
//}
//
//if (result === "heads" && choice === "heads") {
//    alert("The flip was heads and you chose heads...you win!");
//}
//else if (result === "heads" && choice === "tails") {
//    alert("The flip was heads but you chose tails...you lose!");
//}
//else if (result === "tails" && choice === "heads") {
//    alert("The flip was tails but you chose heads...you lose!");
//}
//else if (result === "tails" && choice === "tails") {
//    alert("The flip was tails and you chose tails...you win!");
//}




var coinFlip = Math.round(Math.random());
//   alert(coinFlip); //for testing purposes
var choice = prompt("Select heads or tails");

if (coinFlip === 0) {
    var result = true;
}
else if (coinFlip === 1) {
    var result = false;
}

if (result === true && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
}
else if (result === true && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
}
else if (result === false && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
}
else if (result === false && choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
}