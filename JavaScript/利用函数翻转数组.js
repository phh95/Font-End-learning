function reverse(arr) {
    var newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}

var arr1 = reverse([1, 2, 3, 4, 5, 6]);
console.log(arr1);