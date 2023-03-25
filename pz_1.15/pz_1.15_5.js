const text = "Map map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called)."

function getMapOfWordsCount(text) {
    let map = new Map()
    text = text.toLowerCase()

    let words = text.split(new RegExp('[ ,()\\[\\]\.\\-—]'))

    for (const word of words) {
        if (word !== '') {
            let occursCount = map.get(word)
            if (occursCount !== undefined) {
                map.set(word, occursCount + 1)
                continue
            }

            map.set(word, 1)
        }
    }

    return map
}

console.log(getMapOfWordsCount(text))



