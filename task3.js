// 2677. Chunk Array

var chunk = function (arr, size) {
    let newArr = []

    let berapax = arr.length / size
    if (arr.length % size !== 0) {
        berapax = (arr.length - (arr.length % size)) / size + 1
    }

    for (let j = 0; j < berapax; j++) {
        newArr[j] = []

        for (let k = 0; k < size; k++) {
            let index = j * size + k
            if (index < arr.length) {
                newArr[j][k] = arr[index]
            }
        }
    }
    return newArr
}
