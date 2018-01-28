function rangePrint (arr) {
    var arr = [2,10,2];

    for (var i = arr[0]; i < arr[1]; i = i + arr[2]) {
        console.log (i);
    }
}
rangePrint ();