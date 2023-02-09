let n = 100;

for (let i = 2; i <= n; i++) {
    let a = 1;
    if (i > 2 && i % 2 != 0) {
        for (let j = 3; j * j <= i; j = j + 2) {
            if (i % j == 0) {
                a = 0;
                break;
            }
        }
    } else if (i != 2) a = 0;
    if (a == 1) {
        console.log(i);
    }
}