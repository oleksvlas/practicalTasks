let c = 0;

do{
    if(c==0)
        console.log(c, " - це нуль;");
    else if(c % 2 == 1)
        console.log(c, " - непарне число;");
    else
        console.log(c, " - парне число;");
    c++;
}while(c<=20);