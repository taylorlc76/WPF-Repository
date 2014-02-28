//Lindsay Taylor 02/27/2014 Functions Assignment

var scones = prompt("How many organic scones would you like?");

var cinnamonRolls = prompt("How many organic cinnamon rolls would you like?");

var croissants = prompt("Would you like a \"flavored\", or a \" plain\" croissant?");
if(croissants = flavored){
	var flavoredNum = prompt("How many would you like?");
}else if(croissants = plain){
	var plainNum = prompt("How many would you like?");
}else{
	alert("You did not input either flavored or plain!");
}

function pastries(tax){
	var goodies = (scones + cinnamonRolls + flavoredNum + plainNum) * tax;
	console.log("The subtotal for your pastries is $" + goodies + ". The total with tax is $" + total +".");
}

var total = pastries(1.07);