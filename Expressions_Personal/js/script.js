//Lindsay Taylor, 02/13/2014, Assignment: Expressions

//Using number of girls, time for each girl, and amount of transitions between performances, I can calculate amount of time spent volunteering at the show doing makeup.

var girls = prompt("Enter number of girls?"); //this allows for the user to be prompted to enter in the number of girls needing makeup done for the show

var preshow = prompt("How many minutes allotted for each girl before the show?"); //this allows for the user to input how many minutes they will allot for each girl for makeup

var transitions = prompt("How many transitions will there be during the show for more makeup?"); //this allows for the user to tell me the amount of transitions during the show needed to change up makeup

var transitionTime = prompt("How many minutes will be allowed for makeup changes during transitions?"); //this variable allows for the user to input time between transitions needing makeup done for the girls

var result = (girls * preshow) + (transitionTime *transitions / girls); //this variable will display the minutes total when calculating how many girls, minutes for each girl, and the amount of transitions during the show

console.log(result);