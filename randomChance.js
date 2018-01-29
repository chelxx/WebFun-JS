//Random Chance Assignment

function randomChance (quarters) {
    
    for (var i = quarters; i > 0; i--) {
        if ((Math.floor (Math.random() * 100)) == 23) {
            var win = (Math.floor (Math.random() * 100) + 50);
            console.log ("Yeah!" + (quarters + win));
            break;
        } else {
            console.log ("No!")
        }
        console.log ("Quarters: " + i);
    }
} 
randomChance (100);