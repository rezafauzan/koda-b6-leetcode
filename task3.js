// 2677. Chunk Array
var chunk = function (arr, size) {
    let newArr = []
    let berapax = arr.length / size
    for (i = 0; i < arr.length; i++) {
        for (let j = 0; j < berapax; j++) {
            newArr[j] = []
            for (let k = 0; k < size; k++) {
                newArr[j][newArr[j]] = arr[i]
            }
        }
    }
    return newArr
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(chunk(arr, 4))