//Lindsay Taylor, 02/13/2014, Expressions Assignment

//How much can a bag of whole coffee beans make into fresh, hot coffee using size of bag of beans, amount each brew makes into liquid, amount of grounded beans needed for each brew.

var bag = prompt("How many pounds of whole beans is in one bag?"); //this allows for the user to be prompted to enter in how many pounds of beans are in one bag for coffee and the variable allows me to use that information into my calculation

var groundCoffee = prompt("How many ounces of ground coffee is needed for one brew?"); //this allows for me to use the user's input of the ounces of coffee for each brew for my calculation

var liquidCoffee = prompt("How many ounces of liquid coffee is made with one brew?"); //this allows for me to use the user's input for how many ounces one brew of coffee makes at one time 

var wholeGrounds = bag * 16; //this allows for me to calculate the amount of ounces of ground coffee is in the user's input of what one bag of whole beans

var numOfBrews = wholeGrounds / groundCoffee; //this caclulates the number of brews made from one whole bag of coffee beans

var result = numOfBrews * liquidCoffee; //this calculates the answer to my promblem of how many ounces of coffee is made from one bag of beans

alert("Your bag of beans makes " + result + " ounces of hot liquid coffee"); //this shows the user the result of the inputs given from them of the amount of ounces of coffee made from their bag of beans

console.log("Your bag of beans makes " + result + " ounces of hot liquid coffee"); //this prints out the result to the console