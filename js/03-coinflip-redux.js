/*eslint-env browser*/

var coinFlip

for (var i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("heads");
    }
    else if (coinFlip === 1) {
        console.log("tails");
    }
}