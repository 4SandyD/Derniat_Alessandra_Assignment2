var callOut;

for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    callOut = "Marco!";
    console.log(callOut);
  }
  else if (i % 5 === 0 && i % 3 !== 0) {
    callOut = "Polo!";
    console.log(callOut);
  }
  else if (i % 3 === 0 && i % 5 === 0) {
    callOut = "Marco! Polo!";
    console.log(callOut);
  }
  else {
    console.log(i);
  }
}