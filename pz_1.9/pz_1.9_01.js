function isPrime(num) {
    let currentDivisor = 2;
    let maxDivisor = num;
    while (currentDivisor < maxDivisor) {
        if (num % currentDivisor++ == 0) {
            return false;
        }
    }
    return true;
}
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}