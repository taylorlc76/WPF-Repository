//Lindsay Taylor 02/20/2014 Conditionals

//Case of Apples

var caseOfApples = prompt("How many pounds is a case of apples?"); //this is used to calculate to ounces and individual apples later

var applesToJuice = prompt("On average, how many apples go into making a large juice?"); //this determines how many apples go into a juice for further calculation

var autumnHarvest = prompt("On average, how many apples go into making the Autumn Harvest mix?"); // this is used to find out how many go into the weekly autumn harvest mix

var applesToPie = prompt("On average, how many apples are used to make an apple custard pie?"); //this is used for amount of apples per pie made

var applePies = prompt("On average, how many apple pies are made each week?"); //this is used for the amount of pies made each week

var applesToOunces = caseOfApples * 16; //this calculates pounds into ounces. 1lb = 16oz

var pies = (applePies * applesToPie) * 7; //this calculates the amount of pies needed each week by the amount of apples needed for each pie. Then its multilples by 7 which is the amount of ounces each apple averages

var harvest = autumnHarvest * 7 //this multiplies the amount of apples in the autumn harvest by its average weight which is 7

var applesAndPiesOunces = (applesToOunces - pies) // this subtracts the weight of apples needed for pies from the ounces of the case of apples

var totalAppsPiesHarvest = totalOunces / 7 //this divides the total of all conditions by the weight to get the exact amount of apples left for juicing

var totalAppsPies = applesAndPiesOunces / 7 //this divides the tital off all conditions except autumn harvest which doesn't happen at first bye the weight of the apples total to get what's left

var totalOunces = applesToOunces + pies + harvest //this calculates all ounces of each whole conditions into a total of ounces

if(applesToOunces / 2 > applesAndPiesOunces){
	console.log("You have " + totalAppsPies + " apples after juicing all week!");
}else if(applesToOunces / 2 > totalOunces){
	console.log("You have " + totalAppsPiesHarvest + " apples after baking and juicing all week!");
}else{
	console.log("You need to buy more apples!");
}