// Add your functions here
function map(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i])
    }
    return newArr
}

function reduce(arr, func, start = null) {
    if (!start) {
        start = arr[0]
    } else {
        start = func(start, arr[0])
    }
    let result = start;
    for (let i = 1; i < arr.length; i++) {
        result = func(result, arr[i]);
    }
    return result;
}