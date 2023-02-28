const check = () => {
    let numeric = Number(prompt("Enter some numeric"))

    console.log(numeric > 0 ? "Is positive" : "Isn`t positive");
    if (numeric % 2 !== 0 &&
        numeric % 3 !== 0 &&
        numeric % Math.sqrt(numeric) !== 0 &&
        numeric % 5 !== 0 &&
        numeric % 7 !== 0 ||
        numeric === 2 ||
        numeric === 3 ||
        numeric === 5 ||
        numeric === 7
    ) {
        console.log("Numeric is prime")
    } else {
        console.log("Numeric isn`t prime")
    }

    if (numeric % 2 === 0) {
        console.log("Numeric is divide on 2")
    }
    if (numeric % 5 === 0) {
        console.log("Numeric is divide on 5")
    }
    if (numeric % 3 === 0) {
        console.log("Numeric is divide on 3")
    }
    if (numeric % 6 === 0) {
        console.log("Numeric is divide on 6")
    }
    if (numeric % 9 === 0) {
        console.log("Numeric is divide on 9")
    }

}


check()