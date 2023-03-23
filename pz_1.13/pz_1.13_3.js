class Random {
    static nextDouble(low, high) {
        return Math.random() * (high - low) + low
    }

    static nextInt(low, high) {
        return Math.round(this.nextDouble(low, high))
    }

    static nextElement(array) {
        return array[this.nextInt(0, array.length)]
    }
}

function main(){
    console.log(Random.nextElement([1,2,3,4]))
}

main()