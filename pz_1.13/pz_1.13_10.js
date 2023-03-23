

class PowerStation {
    getPower(dayTime) {
        switch (dayTime) {
            case DayTime.DAY:
                return 100
            case DayTime.NIGHT:
                return 100
            default:
                throw new Error("Uncorrected day time")
        }
    }
}

const DayTime = {
    DAY: "day",
    NIGHT: "night"
}

class SolarPanelFive {
    getPower(dayTime) {
        switch (dayTime) {
            case DayTime.DAY:
                return 5
            case DayTime.NIGHT:
                return 0
            default:
                throw new Error("Uncorrected day time")
        }
    }
}

class SolarPanelTwo {
    getPower(dayTime) {
        switch (dayTime) {
            case DayTime.DAY:
                return 2
            case DayTime.NIGHT:
                return 0
            default:
                throw new Error("Uncorrected day time")
        }
    }
}

class Block {
    flats = []

    getConsumePower(dayTime) {
        let total = 0
        for (const flat of this.flats) {
            total += flat.getConsumePower(dayTime)
        }
        return total
    }
}

class Flat {
    getConsumePower(dayTime) {
        switch (dayTime) {
            case DayTime.DAY:
                return 4
            case DayTime.NIGHT:
                return 1
            default:
                throw new Error("Uncorrected day time")
        }
    }
}

class Line {
    power = 1000
    priceByOnePower = 5
}


let dayTime = DayTime.NIGHT

let producers = [new PowerStation(), new SolarPanelFive(), new SolarPanelFive(), new SolarPanelFive(), new SolarPanelTwo(), new SolarPanelTwo()]
let line = new Line()

let block = new Block()
for (let i = 0; i < 250; i++) {
    block.flats.push(new Flat())
}

let consumers = [block, block]

let totalConsuming = 0
consumers.forEach(consumer => {
    totalConsuming += consumer.getConsumePower(dayTime)
})

let totalProducing = 0

producers.forEach(producer => {
    totalProducing += producer.getPower(dayTime)
})

let diff = totalProducing - totalConsuming
let finalMess = `Daytime - ${dayTime}\nWe produce ${totalProducing}WT and consume ${totalConsuming}WT\n`

if (diff === 0) {
    finalMess += "Not much not less"
} else if (diff > 0) {
    let canSoldWt = diff > line.power ? diff * line.priceByOnePower : line.power * line.priceByOnePower
    finalMess += `We can sell ${diff}WT and get ${canSoldWt}$`
} else {
    diff = Math.abs(diff)
    let canSoldWt = diff > line.power ? diff * line.priceByOnePower : line.power * line.priceByOnePower
    finalMess += `We can buy ${diff}WT for ${canSoldWt}$`
}

console.log(finalMess)