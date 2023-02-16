function main() {
    let n = 12000
    if (n > 9999 || n < 0) {
        console.log("Not appropriate number")
        return  {}
    }
    let thousand = Math.trunc(n / 1000 % 10)
    let hundreds = Math.trunc(n / 100 % 10)
    let tens = Math.trunc(n / 10 % 10)
    let ones = Math.trunc(n % 10)
    return {
        ones,
        tens,
        hundreds,
        thousand
    }

}
console.log(main())

