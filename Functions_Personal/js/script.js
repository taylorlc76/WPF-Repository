//Lindsay Taylor 02/27/2014 Functions Assignment

//Personal Budget

var salary = prompt("On average, how much money do you earn each month?");//this prompt takes the user's inputted salary each month for further calculation

var bills = prompt("How much do you pay each month on bills? \nIncluding car, credit cards, rent, utilities, ect.");//this prompt will use user's input for subtracting this amount from salary later

var necessities = prompt("On average, how much do you spend each month for necessities? \nSuch as toiletries, self care, prescriptions, food, ect.");//this prompt is also used for items that aren't a dire need to pay so it is also subtracted though it is only an average

var budget = function(year){
	var yearly = (salary - bills - necessities) * year;//this takes the bills and necessities from the salary and multiplies by the invocation of 12 below to get the yearly
	return yearly;//this sends the yearly to the function
}

var y = budget(12);//this invokes the function by 12 to make the yearly budget as a variable

console.log("You have $" + y + " left for spending or saving each year");//this prints out the script to the console