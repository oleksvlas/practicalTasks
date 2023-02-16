function calc(num_1, num_2, fun){
        switch(fun){
            case 1: alert(num_1 + num_2); break;
            case 2: alert(num = num_1 - num_2); break;
            case 3: 
                if(num_2 == 0){
                    alert("Знаменник не повинен дорівнювати 0");
                }else{
                    alert(num_1 / num_2); 
                }
                break;
            case 4: alert(num_1 * num_2); break;
        }

        alert(num);
}

let fun = Number(prompt("Choose move \n1:Add\n2:Sub\n3:Div\n4:Mul"));
let num_1 = Number(prompt("Write first number"));
let num_2 = Number(prompt("Write second number"));

calc(num_1, num_2, fun);