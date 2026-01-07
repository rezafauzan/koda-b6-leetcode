// 2649. Nested Array Generator
/**
 * @param {Array} arr
 * @return {Generator}
 */
function* inorderTraversal(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (Array.isArray(item)) {
            yield* inorderTraversal(item)
        } else {
            yield item
        }
    }
}
/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */