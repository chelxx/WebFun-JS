//For a Few Billion Assignment

var servant = 0.01;

for (var i = 1; i < 31; i++) {
    console.log ("Day " + i + ": $" +servant);
    servant = servant * 2;
}
console.log ("The servant received a total of $" + servant + " in 30 days.");