function numbersOnly (arr) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArray.push (arr[i]);
        }
    }
    console.log (newArray);
    return newArray;
}
numbersOnly ([1,2,3,4,"hi",5,"hi"]);