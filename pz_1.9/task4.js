const n = prompt("Enter n")
 for (let i = 1; i <= n; i++) {
     console.log("*".repeat(i))
 }
 console.log("----------------------")
 for (let i = 1; i <= n; i++) {
     console.log(" ".repeat(n-i) +"*".repeat(i * 2 - 1))
 }
 console.log("----------------------")
if(n % 2 === 0) {
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1))
    }
    for (let i = Math.floor(n / 2) ; i >= 1; i--) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1))
    }

}else{
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1))
    }
    for (let i = Math.floor(n / 2) + 1 ; i >= 1; i--) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1))
    }
}