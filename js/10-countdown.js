var numResponse = prompt("Enter a whole number");
  if (numResponse < 0) {
    numResponse = prompt("Enter a whole number greater than 0");
  }

for (var i = numResponse; i > -1; i--) {
  console.log(i);
}


