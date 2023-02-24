function checkEmail(email){
    let check = false;
    if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        check = true
    }
    console.log(check);
}

checkEmail("test@gmail.com");