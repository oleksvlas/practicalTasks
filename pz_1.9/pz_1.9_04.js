let c = prompt();
let d = c;
let e = c;
c++;

for(let i = 1; i < c; console.log("*".repeat(i++))){}

for (let i = 1; i <= d; i++) {
    console.log(' '.repeat(d - i) + '*'.repeat(2 * i - 1) + ' '.repeat(d - i));
  }

for (let i = 1; i <= e; i++) {    
    console.log(' '.repeat(e - i) + '*'.repeat(2 * i - 1));  
  }
  
for (let i = e - 1; i >= 1; i--) {    
    console.log(' '.repeat(e - i) + '*'.repeat(2 * i - 1));  
  }