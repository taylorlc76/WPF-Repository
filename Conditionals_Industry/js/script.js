//Lindsay Taylor 02/20/2014 Conditionals

//Case of Apples

var caseOfApples = prompt("How many pounds is a case of apples?");

var applesToJuice = prompt("On average, how many apples go into making a large juice?");

var autumnHarvest = prompt("On average, how many apples go into making the Autumn Harvest mix?");

var applesToPie = prompt("On average, how many apples are used to make an apple custard pie?");
var applePies = prompt("On average, how many apple pies are made each week?");

var applesToOunces = caseOfApples * 16;

var pies = (applePies * applesToPie) * 7;

var harvest = autumnHarvest * 7

var applesAndPiesOunces = (applesToOunces - pies)

var totalAppsPiesHarvest = totalOunces / 7

var totalAppsPies = applesAndPiesOunces / 7

var totalOunces = (applesToOunces - pies) - harvest

if(applesToOunces / 2 >= applesAndPiesOunces){
	console.log("You have " + totalAppsPies + " apples after juicing all week!");
}else if(applesToOunces / 2 >= totalOunces){
	console.log("You have " + totalAppsPiesHarvest + " apples after baking and juicing all week!");
}else{
	console.log("You need to buy more apples!");
}