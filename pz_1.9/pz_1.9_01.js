const n = 100
let i = 0

while (i < 100) {
    if(isSimple(i)) {
        console.log(i)
    }
    i++
}

function isSimple(n) {
    if(n === 1 || n === 0) {
        return false
    } else {
        let i = 2
        while (i < n) {
            if(n % i === 0) {
                return false
            }
            i++
        }
    }
    return true
}