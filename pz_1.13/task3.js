class Random {
    constructor(low, high) {
        this.low = low
        this.high = high
    }

    Random_nextDouble(low, high) {
        console.log(Math.random() * (high - low) + low)
    }

    Random_nextInt(low, high) {
        console.log(Math.round(Math.random() * (high - low) + low))
    }
    Random_nextElement(array){
        let randomIndex = Math.floor(Math.random() * 4);
        console.log(array[randomIndex]);
    }
}
let high = 10
let low = 0
let arr = ["boo", 2, 5, "pap", 0, "lol"]
const random = new Random()
random.Random_nextDouble(low, high)
random.Random_nextInt(low, high)
random.Random_nextElement(arr)