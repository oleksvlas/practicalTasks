const si = require('systeminformation')

si.cpu()
    .then(cpuData => {
        console.log('Cpu data:\n', cpuData)
    })
    .catch(err => {
        console.log(err)
    })

si.mem()
    .then(memData => {
        console.log('Memory data:\n', memData)
    })
    .catch(err => {
        console.log(err)
    })

si.currentLoad()
    .then(currentLoadData => {
        console.log("Current load data", currentLoadData)
    })
    .catch(err => {
        console.log(err)
    })

