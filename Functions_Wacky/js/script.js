//Lindsay Taylor 02/27/2014 Functions Assignment



var age = prompt("How old are ye?");

function permission(){
	(age < 18) ? alert("You are too young to enter!") : alert("You may pass!");
}

permission();