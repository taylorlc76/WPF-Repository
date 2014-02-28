//Lindsay Taylor 02/27/2014 Functions Assignment

alert("Welcome to the Diapers of Doom, to enter you must be of legal age");

var age = prompt("How old are ye?");

function permission(){
	(age < 18) ? alert("You are too young to enter!") : alert("You may pass!");
}

permission();