const fs = require('fs/promises');
const path = 'folder/data.csv'

fs.readFile(path, 'utf-8')
    .then(data => data = data.split('\r\n'))
        .then(data => {
            let arrData = []
            for (let i = 0; i < data.length; i++) {
              arrData[i] = data[i].split(', ');
            }
            let lines = arrData[0];
            arrData = arrData.splice(1, arrData.length);
            let text = "";
            for (let i = 0; i < arrData.length; i++) {
                if(i == 0){
                   text += "[{\n";
                }else{
                    text += "{\n" 
                }
                for (let j = 0; j < lines.length; j++) {
                    text += (lines[j]+":'" + arrData[i][j]+"',\n");
                }
                if(i == arrData.length-1)
                    text += "}]"
                else
                    text += "},"
            }
            return "let data =\n"+text;
        }).then(data => fs.writeFile('folder/data.js', data))
                .then(console.log("Ви записали текст з 'data.csv' в 'data.js'."));
