const scanner = require('node-wifi-scanner');

scanner.scan((err, networks) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(networks);
})