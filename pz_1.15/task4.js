function getCheckMail(mail) {
     reg = /\w+\@\w+\.\w+/gi
     return reg.test(mail)

}
console.log(getCheckMail("test@test.test"))
console.log(getCheckMail("olgaturchak14@gmail.com"))
console.log(getCheckMail("nothing@fo"))
console.log(getCheckMail("nothing.fo"))
