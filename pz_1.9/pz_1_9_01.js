let n = 100;
let i = 2;
while ( i <= n) {
  let flag=1;
  let j = 2;
  while ((j <= i/2)&&(flag==1)) {
    j=j+1;
     if (i%j==0) {
         flag=0}
    }
 if(flag==1) {console.log(i);}
 i++;
}