let a = 0;

while ( a<= 100){
    let flag = 0;
    let b = 2;

    while(b < a) {
        if (a % b == 0) {
            flag = 1;
            break;
        }
        b++;
    }

    if(a > 1 && flag == 0){
        console.log(a);
    }
    a++;
}