//Lindsay Taylor 02/27/2014 Functions Worksheet

//Circumference

function circle(radius){
	var circumference = 2 * radius * 3.14;//calculation used in this function
	console.log("The circumference of your circle is " + circumference);//prints out to console
}
circle(4);//refers to radius to be manipulated in the calculation when invoking the function circle

//Stung!

var stings = function(bees, pounds){//code the anonymous function runs
	var death = bees * pounds;//the calculation for bee stings to pounds
	return death;//sends the result to function
}

var s = stings(8.666666667, 50);//invokes the function using these variables
console.log("It takes " + s + " bee stings to kill this animal.");//prints out to the console