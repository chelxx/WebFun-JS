//While You Wait Assignment

var daysBday = 60;

for (var daysBday = 60; daysBday > -1; daysBday--) {
    if (daysBday > 30) {
        console.log ("I'm so sad! My birthday is too far away! I have to wait " + daysBday + " more!");
    }
    if (daysBday < 30) {
        console.log ("I'm getting excited! My birthday is getting closer! I have to wait " + daysBday + " more!");
    }
    if (daysBday == 0) {
        console.log ("Yay! Happy Birthday!");
    }
}