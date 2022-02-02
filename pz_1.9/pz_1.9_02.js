let start = 0;

do{
    let description = "";
    if (start == 0)
        description = " - це нуль";
    if (start % 2 == 0)
        description = " - це парне";
    else
        description = " - це непарне"

    console.log(start + description);
    start++;
} while (start <= 20)