//Lindsay Taylor 02/27/2014 Functions Assignment

var scones = prompt("How many organic scones would you like?");//this askes the user the amount of scones they want

var cinnamonRolls = prompt("How many organic cinnamon rolls would you like?");//this askes how many cinnamon rolls they want

var croissants = prompt("Would you like a \"flavored\", or a \" plain\" croissant?");//this askes the user if they want plain or flavored croissants

if(croissants == "flavored"){
	var croissantNum = prompt("How many would you like?");//if the user inputs flavored they will be asked how many
}else if(croissants == "plain"){
	var croissantNum = prompt("How many would you like?");//fi the user inputs plain they will be asked how many
}else{
	alert("You did not input either flavored or plain!");//if they did not put in either plain or flavored they are alerted to the statement and must start over
}


function pastries(sconePrice, cinnPrice, croissantPrice){//this sets up the items that need inputted amounts
	var goods = (scones * sconePrice) + (cinnamonRolls * cinnPrice) + (croissantNum * croissantPrice);//this calculates the amount of pastries by their price to get a total
	console.log("The total for your pastries is $" + goods + ".");//this prints out the total to the console
	
}

var total = pastries(2, 1.50, 3);//this invokes the function with these prices
