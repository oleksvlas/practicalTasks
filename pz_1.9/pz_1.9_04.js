
Piramide();
Triagle(6); 
Romb();



  

function Piramide(){
    var x="*";
        for(var i=0;i<6;i++){
            var y="*";
            console.log(x);
            x+=y;
        }
        console.log(" ");
}

function Triagle(max){
    var i = 0;
  var j = 0;
//   var max = 6; 
while (i < max) {
 var space ="";
 var  star ="";
  for (j = 0; j < max - i; j++) space +=" ";
  for (j = 0; j < 2 * i + 1; j++) star +="*";
  console.log(space + star);
  i++;
}
console.log(" ");
}

function Romb(){
      var i = 0;
      var x=0;
     var j = 0;
      var max = 6; 
while (i < max) {
    var space ="";
    var  star ="";
    if(x < 3){
  for (j = 0; j < max - i; j++){ space +=" ";}
  for (j = 0; j < 2 * i + 1; j++) {
      star +="*";}
  console.log(space + star);
  i++;
  x++; 
}
else if(x<7){
    for (j = 0; j < max - i; j++){ space +=" ";}
  for (j = 0; j < 2 * i + 1; j++){ star +="*";}
  console.log(space + star);
  i--;
  x++;   
  }
  else
     break; 
}
console.log(" ");
}   
prompt()
   