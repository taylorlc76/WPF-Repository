//Lindsay Taylor, 02/14/2014, Expressions Worksheet

//Dog Years

//var humanYears = 1; //this is the variable that changes based on how many human years old the dog is

//dogYears = 7; //this is the variable that does not change 

//var result = humanYears * dogYears; //this variable shows that based on the number of human years the dog is, it will always be calculated against 7 years to get the age of the dog in dog years

//console.log("Sparky is " + humanYears + " human years old which is " + result + " in dog years."); //this prints out to the console the statement "Sparky is X human years old which is X in dog years.".

//Slice of Pie part 1

//var partyPeople = 5; //this variable changes based on the number of people that attended the party

//var numOfPizzas = 10; //this is the variable that changes based on the number of pizzas ordered

//slicesPerPizza = 8; //this variable may be changed but during calculations cannot be changed

//var result = (numOfPizzas * slicesPerPizza) / partyPeople; //this calculates the number of pizzas by slices to figure out how many slices in total are for the party then divides by the amount of party people attending so you can know how many slices they get each, equally.

//console.log("Each person ate " + result + " slices of pizza at the party."); //this prints out to the console "Each person ate X slices of pizza at the part."

//Slices of Pie part 2

//var partyPeople = 5; //this variable changes based on the number of people that attended the party

//var numOfPizzas = 10; //this is the variable that changes based on the number of pizzas ordered

//slicesPerPizza = 8; //this variable may be changed but during calculations cannot be changed

//var slicesPerPerson = (numOfPizzas * slicesPerPizza) / partyPeople; 

//var result = slicesPerPerson - ;

//Average Shopping Bill

var groceryTotals = [120, 92, 87, 149, 163]; //this is the list of grocery totals for 5 weeks worth. this can be changed any number for a new result later

var totalSpent = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4]; //this is the variable adding up all of the numbers in the array above to get a single total of them all

var average = totalSpent / 5; //this divides the total amount spent for all 5 weeks by the number 5 which indicates the 5 weeks to get the average

console.log("You have spent a total of $" + totalSpent +" on groceries over 5 weeks. That is an average of $" + average + " per week"); //this prints out to the console "You have spent a total of X on groceries over 5 weeks. That is an average of $122.2 per week"

