/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let countRed = 0
    let countWhite = 0
    let countBlue = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            countRed++
        } else if (nums[i] === 1) {
            countWhite++
        }
        else {
            countBlue++
        }
    }

    let index = 0

    for (let i = 0; i < countRed; i++) {
        nums[index++] = 0
    }

    for (let i = 0; i < countWhite; i++) {
        nums[index++] = 1
    }

    for (let i = 0; i < countBlue; i++) {
        nums[index++] = 2
    }
}