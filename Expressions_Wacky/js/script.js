//Lindsay Taylor, 02/14/2014, Expressions Assignment

//How many lightbulbs does it take to blow a fuse using wattage of lightbulb, the amperes of a fuse, and the volts of the outlets

var amperes = prompt("Please input below if your fuse uses either 15 or 25 amperes"); //this will allow for me to calculate the amperes of the fuse box with the lightbuls in the future

var lightbulbWattage = prompt("What is the wattage of the lightbulbs?"); //this allows for me to use the user's input of the wattage of each lightbulb for future calculation

var outletVolts = prompt("Please input below if your outlets use 120 or 240 volts"); //this allows for me to use either 120 ro 240 volts inputted from user for future calculation

var ampsToWatts = amperes * outletVolts; //this calculates how many watts are in the amperes of the fuse box using the volts of the outlet 

var result = ampsToWatts / lightbulbWattage; //this calculates the amount lightbulbs with their wattage that equal to the wattage the fuse box can take

alert("You will blow your fuse box with " + result + " lightbulbs"); //this will present to the user based off the information provided from them how many lightbulbs it will take to blow their fuse box

console.log(result);

