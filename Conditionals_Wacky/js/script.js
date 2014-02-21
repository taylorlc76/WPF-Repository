//Lindsay Taylor 02/20/2014 Conditionals

//Party!

var people = prompt("How many people will come to your party?"); //this will be used for inputting wine per person

var wine = prompt("How many bottles of wine will you serve?"); //this will be used to calculate ounces for each bottle and for wine per person

var ouncesPerPerson = (wine * 33.8) / people; // this calculates the ounces of wine each person will received based on user input

var winePerPerson = ouncesPerPerson / 8; //this will calculate how many glasses of wine each person will get

(winePerPerson <= 2) ? console.log("You need to buy more wine!") : console.log("You have more than enough for each person to have atleast two glasses of wine!"); //this will print out to the console either one of these statements based on if each persone will get more than or equal to two glasses of wine