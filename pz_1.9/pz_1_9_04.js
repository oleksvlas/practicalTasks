let tru ="*"
    let pra= "*"
    let rom="*"
    let l="          "
    let k="        "
    let der=6;

    for(let i = 0;i<5;i++){
        console.log(tru+l+pra+k+rom)
        
        tru+="*"; 
        pra+="**"
            l = l.substring(0,l.length-2)
       
            if(i<2){
              k = k.substring(0,k.length-2)
              rom+="**"

            }
            else{
              rom = rom.substring(0,rom.length-2)
            }
    }