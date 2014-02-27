//Lindsay Taylor 02/27/2014 Functions Assignment

//Personal Budget

var salary = prompt("On average, how much money do you earn each month?");

var bills = prompt("How much do you pay each month on bills? \n Including car, credit cards, rent, utilities, ect.");

var necessities = prompt("On average, how much do you spend each month for necessities? \n Such as toiletries, self care, prescriptions, ect.");

var food = prompt("How much do you spend on food each month? \n Including dining out and buying at the grocery store.");

function budget(){
	var month = salary - bills - necessities - food;
	var year = month * 12
	console.log("You have $" + month + " left for spending or saving each month or you have $" + year + " left each year.");
}