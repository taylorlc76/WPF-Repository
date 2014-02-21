//Lindsay Taylor 02/20/2014 Conditionals

//Party!

var people = prompt("How many people will come to your party?");

var wine = prompt("How many bottles of wine will you serve?");

var ouncesPerPerson = (wine * 33.8) / people;

var winePerPerson = ouncesPerPerson / 8;

(winePerPerson < 2) ? console.log("You need to buy more wine!") : console.log("You have more than enough for each person to have atleast two glasses of wine!");