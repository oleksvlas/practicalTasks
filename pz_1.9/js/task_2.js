function numbers(){
    n = 0;
    do{
        if(n == 0)
        {
            console.log(n+" - це число нуль");
        }else if( n % 2 == 0){
            console.log(n+" - це число парне");
        }else if( n % 2 == 1){
            console.log(n+" - це число непарне");
        }
        n++;
    }while(n <= 10)
}

numbers();