//Lindsay Taylor 02/20/2014 Conditionals

//Buying a Car

var carPrice = prompt("\"The price of the car I want is...\""); //this is the price of the car

var percentDown = prompt("\"I need to put down .__ on the car (convert to decimal).\""); //this is the percent I wish to put down for the car

var months = prompt("\"I need to save up for my percent down in ___ months.\""); //this is how many months I have to save up for the down payment

var actualSaved = prompt("\"I can only save away $___ each month.\""); //this is the amount I can save up each month

var downPayment = carPrice * percentDown

var downInMonths = downPayment / months

var actualInMonths = actualSaved * months

var difference = downPayment - actualInMonths

if(actualInMonths >= downPayment){
	console.log("\"I will be able to get the car!\"");
}else{
	console.log("\"I will need to save up " + difference + " more!\"");
}