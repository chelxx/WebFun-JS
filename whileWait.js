//While You Wait Assignment

function whileYouWait () {

    for (var daysBday = 60; daysBday > -1; daysBday--) {
        if (daysBday > 30) {
            console.log ("Still a long way to go! My birthday is " + daysBday + " days away!");
        }
        if (daysBday <= 30 && daysBday > 5) {
            console.log ("I'm getting excited! My birthday is " + daysBday + " days away!");
        }
         if (daysBday <= 5 && daysBday > 0) {
            console.log ("It's my birthday week! My birthday is " + daysBday + " days away!");
        }
        if (daysBday === 0) {
            console.log ("Yay~ Today is the day! Happy Birthday!");
        }
      }
    }
    whileYouWait ();