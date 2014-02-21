//Lindsay Taylor 02/20/2014 Conditionals

//Buying a Car

var carPrice = prompt("\"The price of the car I want is...\""); //this is the price of the car

var percentDown = prompt("\"I need to put down .__ on the car (convert to decimal).\""); //this is the percent I wish to put down for the car

var months = prompt("\"I need to save up for my percent down in ___ months.\""); //this is how many months I have to save up for the down payment

var actualSaved = prompt("\"I can only save away $___ each month.\""); //this is the amount I can save up each month

var downPayment = carPrice * percentDown //this calculates the dollar amount of the down payment for further calculations

var downInMonths = downPayment / months //this calculates how much each month of the user inputted months I need to save to get the whole down payment

var actualInMonths = actualSaved * months //this shows me how much in the user inputted months I can save up for the down payment

var difference = downPayment - actualInMonths //this calculates the difference between how much I need and how much I can save

if(actualInMonths >= downPayment){
	console.log("\"I will be able to get the car!\"");// this prints to the console if the amount I can save up is equal to or more than the down payment needed
}else{
	console.log("\"I will need to save up " + difference + " more!\""); //this prints to the console if the amount I can save up is less than the down payment needed 
}