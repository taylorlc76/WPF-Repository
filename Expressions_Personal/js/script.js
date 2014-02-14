//Lindsay Taylor, 02/13/2014, Assignment: Expressions

//Using number of girls, time for each girl, and amount of transitions between performances, I can calculate amount of time spent volunteering at the show doing makeup.

var girls = prompt("Enter number of girls?"); //this allows for the user to be prompted to enter in the number of girls needing makeup done for the show

var preshow = prompt("How many minutes allotted for each girl before the show?"); //this allows for the user to input how many minutes they will allot for each girl for makeup

var transitions = prompt("How many transitions will there be during the show for more makeup?"); //this allows for the user to tell me the amount of transitions during the show needed to change up makeup

var transitionTime = prompt("How many minutes will be allowed for makeup changes during transitions?"); //this variable allows for the user to input time between transitions needing makeup done for the girls

var result = (girls * preshow) + (transitionTime *transitions / girls); //this variable will calculate the minutes total for before the show and add the minutes total for during the show together to show the total minutes doing makeup in all

console.log("The amount of minutes needed for makeup for the entire show is " + result + " minutes."); //prints it out to the console

alert("The amount of minutes needed for makeup for the entire show is " + result + " minutes."); //this alert shows the user the result of the information inputted from the prompts regarding how many minutes of makeup time will be needed as a whole