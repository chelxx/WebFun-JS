//Range Print Assignment

function rangePrint (arr) {

    for (var i = arr[0]; i < arr[1]; i = i + arr[2]) {
        console.log (i);
    }
}
rangePrint ([2,10,2]);