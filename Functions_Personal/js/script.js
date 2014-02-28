//Lindsay Taylor 02/27/2014 Functions Assignment

//Personal Budget

var salary = prompt("On average, how much money do you earn each month?");

var bills = prompt("How much do you pay each month on bills? \nIncluding car, credit cards, rent, utilities, ect.");

var necessities = prompt("On average, how much do you spend each month for necessities? \nSuch as toiletries, self care, prescriptions, food, ect.");

var budget = function(year){
	var yearly = (salary - bills - necessities) * year;
	return yearly;
}

var y = budget(12);

console.log("You have $" + y + " left for spending or saving each year");