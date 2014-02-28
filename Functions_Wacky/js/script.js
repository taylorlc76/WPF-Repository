//Lindsay Taylor 02/27/2014 Functions Assignment

alert("Welcome to the Diapers of Doom, to enter you must be of legal age");//this alerts the user when they enter the page

var age = prompt("How old are ye?");//this prompts the user to enter in their age

function permission(){
	(age < 18) ? alert("You are too young to enter!") : alert("You may pass!");//this will give an alert to user based on their age provided
	return age
}

permission();//this invokes the function

console.log("The user is " + age + " years old.");