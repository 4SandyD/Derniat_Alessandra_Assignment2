/*eslint-env browser*/

var coinFlip;

do {
    coinFlip = Math.round(Math.random());
        if (coinFlip === 0) {
        console.log("heads");
    }
    else if (coinFlip === 1) {
        console.log("tails");
    }
}
while (coinFlip === 0);