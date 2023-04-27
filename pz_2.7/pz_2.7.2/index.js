const { Console } = require('console')
const fs = require('fs')
const { resolve } = require('path')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const start = async () => {
    const name = await new Promise(resolve => {
        rl.question("Уведіть ваше ім`я:\n", resolve)
    })
    await game(name);
}

const game = async (name) => { 
    const data = await new Promise ( resolve => resolve(JSON.parse(convertCsvToJson('info/capital_country.csv'))));
    const sequence = await new Promise ( resolve => resolve(generateRandomSequence(data.length)));

    let answers = {
        all: {
            total: 0,
            correct: 0
        },
        level1:{
            total: 0, 
            correct: 0
        },
        level2:{
            total: 0, 
            correct: 0
        },
        level3:{
            total: 0, 
            correct: 0
        },
        level4:{
            total: 0, 
            correct: 0
        }
    }

    for await (const index of sequence) {
        answers.all.total++;
        console.log("======================\n")
        console.log(data[index].question+"?\n1:"+
                    data[index].answer1+"\n2:"+
                    data[index].answer2+"\n3:"+
                    data[index].answer3+"\n4:"+
                    data[index].answer4+"\n")
        
        const answer = await new Promise(resolve => rl.question("Напишіть відповідь:\n", resolve));
        if(answer != data[index].correctAnswer){
            console.log(`Задано запитань: ${answers.all.total}, Правильних відповідей: ${answers.all.correct}.`);
            console.log(data[index].partsWorld)
            answers = await new Promise(resolve => resolve(checkLevel(answers, false, data[index].partsWorld)))
            await result(name, answers);
        }

        answers = await new Promise(resolve => resolve(checkLevel(answers, true, data[index].partsWorld)))
        
        answers.all.correct++;
    }
    console.log(`Вітаємо! Ви Виграли! Задано запитань: ${answers.all.total}, Правильних відповідей: ${answers.all.correct}.`);
    await result(name, answers);
}

const getDateNow = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const checkLevel = (answers, correct, country) => {
    if(country == "Африка"){
        if(correct){
            answers.level4.correct++;
        }
        answers.level4.total++;
    }if(country == "Південна Америка"){
        if(correct){
            answers.level3.correct++;
        }
        answers.level3.total++;
    }if(country == "Азія"){
        if(correct){
            answers.level2.correct++;
        }
        answers.level2.total++;
    }if(country == "Європа"){
        if(correct){
            answers.level1.correct++;
        }
        answers.level1.total++;
    }

    return answers;
}

const result = async (name, answers) => {
    const text = await new Promise(resolve => resolve(saveTotalData(answers)))
    await fs.promises.writeFile('info/level.log', text, 'utf8');
    const date = await new Promise(resolve => resolve(getDateNow()))
    await fs.promises.appendFile('info/user.log',`${date}, Користувач: ${name}, Задано питань: ${answers.all.total}, Правильних відповідей: ${answers.all.correct}.\n`);
    await again(name);
}

const saveTotalData = async (answers) => {
    const allData = await new Promise(resolve => resolve(JSON.parse(convertLevelLogsToJson('info/level.log'))));
    
    allData.level1.total+=answers.level1.total;
    allData.level1.correct+=answers.level1.correct;
    
    allData.level2.total+=answers.level2.total;
    allData.level2.correct+=answers.level2.correct;

    allData.level3.total+=answers.level3.total;
    allData.level3.correct+=answers.level3.correct;

    allData.level4.total+=answers.level4.total;
    allData.level4.correct+=answers.level4.correct;

    let data = `Перший рівень – Задано:${allData.level1.total},\nПравильних:${allData.level1.correct},\n`+
               `Другий рівень – Задано:${allData.level2.total},\nПравильних:${allData.level2.correct},\n`+
               `Третій рівень – Задано:${allData.level3.total},\nПравильних:${allData.level3.correct},\n`+
               `Четвертий рівень - Задано:${allData.level4.total},\nПравильних:${allData.level4.correct}`

    return data;
}

const again = async (name) => {
    const again_answer = await new Promise(resolve => rl.question("Ви бажаєте продовжити гру?(Y/N)", resolve))
    if(again_answer == "Y"){
        await game(name);
    }else if(again_answer == "N"){
        console.log("Ви покинули гру!");
        process.exit();
    }else{
        console.log("Уведіть вірну відповідь!")
        await again();   
    }
}

const generateRandomSequence = (maxNumber) => {
    const sequence = Array.from({length: maxNumber}, (_, i) => i ); 
    for (let i = sequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
    }
    return sequence;
  }

const convertLevelLogsToJson = (filename) => {
    const data = fs.readFileSync(filename, 'utf-8');
    const lines = data.split('\n');

    const result = {
        level1: {
          total: parseInt(lines[0].split(':')[1]),
          correct: parseInt(lines[1].split(':')[1])
        },
        level2: {
          total: parseInt(lines[2].split(':')[1]),
          correct: parseInt(lines[3].split(':')[1])
        },
        level3: {
          total: parseInt(lines[4].split(':')[1]),
          correct: parseInt(lines[5].split(':')[1])
        },
        level4: {
          total: parseInt(lines[6].split(':')[1]),
          correct: parseInt(lines[7].split(':')[1])
        }
      };

    return JSON.stringify(result);;
}

const convertCsvToJson = (filename) => {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const result = [];
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = currentLine[j].trim();
      }
      result.push(obj);
    }
    const jsonData = JSON.stringify(result);
    return jsonData;
}

start();