//Lindsay Taylor 02/20/2014 Conditionals

//Buying a Car

var carPrice = prompt("\"The price of the car I want is...\"");

var percentDown = prompt("\"I need to put down .__ on the car (convert to decimal).\"");

var months = prompt("\"I need to save up for my percent down in ___ months.\"");

var actualSaved = prompt("\"I can only save away $___ each month.\"");

var downPayment = carPrice * percentDown

var downInMonths = downPayment / months

var actualInMonths = actualSaved * months

var difference = downPayment - actualInMonths

if(actualInMonths >= downPayment){
	console.log("\"I will be able to get the car!\"");
}else{
	console.log("\"I will need to save up " + difference + " more!\"");
}