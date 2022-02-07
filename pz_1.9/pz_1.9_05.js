let numb =10000;
let result= 0;
let counter=0;

while(numb>50){ 
  numb=numb/2;
  if(numb>50)
  counter++;
  result=numb;
}
console.log("result = " + result + ";" + "counter = " + counter );
