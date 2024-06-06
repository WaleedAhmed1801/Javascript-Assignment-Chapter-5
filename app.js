// -------------------------- CHAPTER 5 ASSIGNMENT STARTED ------------------------------------

// -------------------------------Question # 1 & 2 -------------------------------------

var num1 = Number(prompt("Enter Num 1"));
var operator = prompt('Enter Operator')
var num2 = Number(prompt("Enter Num 2"));

if(operator == "+"){
    var sum = num1+num2
    alert("Sum of "+num1 +" and " + num2 + " is " + sum)
}
else if(operator == "-"){
    var sum = num1-num2
    alert("Subtraction of "+num1 +" and " + num2 + " is " + subtraction)
}
else if(operator == "*"){
    var sum = num1*num2
    alert("Multiplication of "+num1 +" and " + num2 + " is " + multiplication)
}
else if(operator == "/"){
    var sum = num1/num2
    alert("Division of "+num1 +" and " + num2 + " is " + division)
}
else if(operator == "%"){
    var sum = num1%num2
    alert("Modulus of "+num1 +" and " + num2 + " is " + modulus)
}
// ------------------------- this task completed here ---------------------------


// ----------------------------- Question # 3 -------------------------------

var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num += 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");
// ------------------------- this task completed here ---------------------------


// ----------------------------- Question # 4 -----------------------------------

var ticketPrice = 600;
var totalCost = ticketPrice * 5;

console.log("Cost of one movie ticket is", ticketPrice, "PKR.");
console.log("Cost of buying 5 tickets to a movie is", totalCost, "PKR.");

// ------------------------- this task completed here ---------------------------


// ------------------------------ Question # 5 ----------------------------------

var userinput = +prompt("Enter Any Number")

for( i=1; i<=10; i++){
    document.write(userinput+" x "+i+" = "+userinput*i, "<br>")
}
// ------------------------- this task completed here ---------------------------

// ------------------------------- Question # 6 ----------------------------------

// Celsius to Fahrenheit
var celsiusTemp = 30;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

// Fahrenheit to Celsius
var fahrenheitTemp2 = 86;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
console.log(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// ------------------------- this task completed here ---------------------------


// ------------------------------- Question # 7 ----------------------------------

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

var receipt = "Shoping Card <br>";
receipt += "Item 1: PKR " + priceItem1 + " x " + quantityItem1 + " = PKR " + (priceItem1 * quantityItem1) + "<br>";
receipt += "Item 2: PKR " + priceItem2 + " x " + quantityItem2 + " = PKR " + (priceItem2 * quantityItem2) + "<br>";
receipt += "Shipping Charges: PKR " + shippingCharges + "<br>";
receipt += "Total Cost: PKR " + totalCost;

document.write(receipt);
// ------------------------- this task completed here ---------------------------

// ------------------------------- Question # 8 ----------------------------------

var totalMarks = 500;
var marksObtained = 420;

// Calculate percentage
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

// ------------------------- this task completed here ---------------------------

// ------------------------------- Question # 9 ----------------------------------

var usdToPKR = 279.09;
var saudiToPKR = 74.41;

var usdAmount = 10;
var saudiAmount = 25;

var totalPKR = (usdAmount * usdToPKR) + (saudiAmount * saudiToPKR);
console.log("Total amount in Pakistani Rupees: " + totalPKR);

// ------------------------- this task completed here ---------------------------

// ------------------------------- Question # 10 ----------------------------------

var number = 5;
var result = ((number + 5) * 5) / 2;

console.log("Result: " + result);

// ------------------------- this task completed here ---------------------------


// ------------------------------- Question # 11 ----------------------------------

var currentYear = new Date().getFullYear();
var birthYear = 1999;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("currentYear Is : 2024 <br>")
document.write("birthYear Is : 1999 <br>")
document.write("Your Age Is : " + age1 + " or " + age2 + " years old.");

// ------------------------- this task completed here ---------------------------

// ------------------------------- Question # 13 ----------------------------------

var favoriteSnack = "cake";
var currentAge = 25;
var maximumAge = 60;
var amountPerDay = 2;

var yearsRemaining = maximumAge - currentAge;
var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;

document.write("You need " + totalSnacksNeeded + " " + favoriteSnack + " to maximum age is " + maximumAge);

// ------------------------- this task completed here ---------------------------

// ------------------------------------- CHAPTER 5 ASSIGNMENT COMPLETED ------------------------------------------