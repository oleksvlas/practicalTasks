const express = require('express');
const path = require('path');
const fs = require('fs');

const filePath = __dirname + '\\data.json'
const port = 3000;

const app = express();

app.listen(port);

app.get('/', (req, res) => {
    res.sendFile('task1.html', {
        root: path.join(__dirname)
    });
});

app.post('/', (req, res) => {
    let clientsInfo = JSON.parse(fs.readFileSync(filePath).toString());

    let clientInfo = {
        ipAddrClient: req.ip,
        port: port,
        time: new Date().toISOString()
    }

    clientsInfo.push(clientInfo)

    fs.writeFileSync(filePath, JSON.stringify(clientsInfo))

    res.redirect('/')
});