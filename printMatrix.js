
const printMatrixvalues = function (array) {
    if(array.length > 0) {
        console.log(array[0]);
        printMatrixvalues(array.slice(1));
    }
}

