function numberObject(num){
    let arr = [["Одиниці:"], ["Десятки:"], ["Сотні:"],["Тисячі:"]];
    let num_split = num.toString().split('');

    for (let index = 0; index < arr.length; index++) {
        arr[index].push(num_split[index]);
    }

    arr.map(el => el[0] + el[1]).forEach(el => console.log(el));
    
    if(num_split.length > 4)
        console.log("Number > 9999");
}

numberObject(999999);