const check = () => {
    let numeric = Number(prompt("Enter some numeric"))

    console.log(numeric > 0 ? "Is positive" : "Isn`t positive");
    console.log(numeric ? "Is positive" : "Isn`t positive");

}

check()