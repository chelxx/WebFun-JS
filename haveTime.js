//IF YOU DON'T MIND, CAN I HAVE THE TIME? Assignment

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";

// if (HOUR == 8 && MINUTE == 50 && PERIOD == "AM") {
//     console.log ("It's almost 9 in the morning!");
// } else if (HOUR == 7 && MINUTE == 15 && PERIOD == "PM"){
//     console.log ("It's just after 7 in the evening!")
// }

if (MINUTE < 30 && PERIOD == "AM") {
    console.log ("It's just after " + HOUR + " in the morning!");
} else if (MINUTE > 30 && PERIOD == "AM") {
    console.log ("It's almost " + (HOUR+1) + " in the morning!");
} else if (MINUTE > 30 && PERIOD == "PM") {
    console.log ("It's almost " + (HOUR+1) + " in the evening!");
} else if (MINUTE < 30 && PERIOD == "PM") {
    console.log ("It's just after " + HOUR + " in the evening!");
}