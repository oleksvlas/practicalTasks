const arr = [1, 1, 3, 4, 4, 1, 3, 2]

console.log(removeDuplicateFromArr(arr))

function removeDuplicateFromArr(arr) {
    return Array.from(new Set(arr))
}