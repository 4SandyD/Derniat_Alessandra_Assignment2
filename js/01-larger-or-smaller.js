/*eslint-env browser*/

var numA = prompt("Enter your first number");
var numB = prompt("Enter your second number");
    
if (numA > numB) {
    alert("The largest number you entered was: " + numA); 
} 
else if (numB > numA) {
    alert("The largest number you entered was: " + numB);
}
else {
    alert("Your numbers are the same. Please enter two different numbers.");
}

