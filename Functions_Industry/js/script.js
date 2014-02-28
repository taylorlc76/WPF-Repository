//Lindsay Taylor 02/27/2014 Functions Assignment

var scones = prompt("How many organic scones would you like?");

var cinnamonRolls = prompt("How many organic cinnamon rolls would you like?");

var croissants = prompt("Would you like a \"flavored\", or a \" plain\" croissant?");

if(croissants == "flavored"){
	var croissantNum = prompt("How many would you like?");
}else if(croissants == "plain"){
	var croissantNum = prompt("How many would you like?");
}else{
	alert("You did not input either flavored or plain!");
}


function pastries(sconePrice, cinnPrice, croissantPrice){
	var goods = (scones * sconePrice) + (cinnamonRolls * cinnPrice) + (croissantNum * croissantPrice);
	console.log("The total for your pastries is $" + goods + ".");
	
}

var total = pastries(2, 1.50, 3);
