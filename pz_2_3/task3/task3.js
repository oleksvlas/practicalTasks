const path = require('path');
const filename = "/home/user_kolia/foo/bar.txt";

function file_info(filename) {
    let file = path.parse(filename).base    //файл
    let file_name = path.parse(filename).name  //назва файлу
    let file_exp = path.parse(filename).ext   //розширення файлу
    let full_path = path.dirname(filename)          //повний шлях
    let fam = path.parse(filename).root    //розширення файлу

    switch (fam){
        case "\\":
            fam = "Windows"
        break
        case "/":
            fam = "Unix"
        break
        default:
            fam = "unknown system"
        break
    }


    return{
        "повний шлях" : full_path,
        "повна назва файлу" : file,
        "назва файлу" : file_name,
        "розширення" : file_exp,
        "вид сімейства ОС" : fam
    }
}
console.log(file_info(filename))

