const someFunc = () => {
    let n = Number(prompt("Enter number"));
    let arr = []

    for (n; n > 0; n--) {
        arr.push(n)
    }
    console.log(arr)
}

someFunc()