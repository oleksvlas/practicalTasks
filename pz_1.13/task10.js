class Generator {
    type = ""
    constructor(id, power) {
        this.id = id
        this.power = power
    }

    getPower(isDay) {
        return this.power
    }
}

class SolarPanel extends Generator {
    constructor(id, power) {
        super(id, power);
        this.type = "Solar energy"
    }

    getPower(isDay) {
        if(isDay) {
            return super.getPower(isDay);
        }
        return 0
    }

    static generate(id, power) {
        if(power > 5){
            throw Error("Power should be less than 5")
        }
        return new SolarPanel(id, power)
    }
}

class ElectricialStation extends Generator {
    constructor(id, power) {
        super(id, power);
        this.type = "Electrical energy"
    }
    static generate(id, power) {
        if(power > 100){
            throw Error("Power should be less than 100")
        }
        return new ElectricialStation(id, power)
    }
}

class Building {
    static powerDay = 4
    static powerNight = 1

    constructor(id, flats, generators, line) {
        this.id = id
        this.flats = flats
        this.generators = generators
        this.line = line
    }

    getProducePower(isDay) {
        let total = 0
        for (const el of this.generators) {
            total += el.getPower(isDay)
        }
        return total
    }

    getSubPowerDay() {
        return this.getProducePower(true) - this.getTotalEnergyDay()
    }

    getSubPowerNight() {
        return this.getProducePower(false) - this.getTotalEnergyNight()
    }

    getTotalEnergyDay() {
        return this.flats * Building.powerDay
    }

    getTotalEnergyNight() {
        return this.flats * Building.powerNight
    }


    getSellPowerDay() {
        let subPowerDay = this.getSubPowerDay();
        if(subPowerDay > 0) {
            return subPowerDay
        }
        return 0
    }

    getSellPowerNight() {
        let subPowerNight = this.getSubPowerNight();
        if(subPowerNight > 0) {
            return subPowerNight
        }
        return 0
    }

    getObtainedPowerNight() {
        let subPowerNight = this.getSubPowerNight();
        if(subPowerNight > 0) {
            return 0
        }
        return Math.abs(subPowerNight)

    }

    getObtainedPowerDay() {
        let subPowerDay = this.getSubPowerDay();
        if(subPowerDay > 0) {
            return 0
        }
        return Math.abs(subPowerDay)
    }

    getPriceByLineSellDay(){
        return  this.getSellPowerDay() * this.line.price
    }
    getPriceByLineSellNight(){
        return  this.getSellPowerNight() * this.line.price
    }
    getPriceByLineBuyDay(){
        return  this.getObtainedPowerDay() * this.line.price
    }
    getPriceByLineBuyNight(){
        return  this.getObtainedPowerNight() * this.line.price
    }
    print() {
        console.log("-".repeat(20))
        console.log("Number of house:", this.id)
        console.log("Total count of flats: ", this.flats)
        console.log("*Day*")
        console.log("Power, produced for a day: ", this.getProducePower(true))
        console.log("Power, needed for a day: ", this.getTotalEnergyDay())
        console.log("Energy difference at day:", this.getSubPowerDay())
        console.log("Can sell energy at day:", this.getSellPowerDay())
        console.log("Should buy energy at day:", this.getObtainedPowerDay())
        console.log("Will total sell for a day:", this.getSellPowerDay(), "for", this.getPriceByLineSellDay())
        console.log("Will total buy for a day:", this.getObtainedPowerDay(), "for", this.getPriceByLineBuyDay())
        console.log("*Night*")
        console.log("Power, produced for a night: ", this.getProducePower(false))
        console.log("Power, needed for a night: ", this.getTotalEnergyNight())
        console.log("Energy difference at night:", this.getSubPowerNight())
        console.log("Can sell energy at night:", this.getSellPowerNight())
        console.log("Should buy energy at night:", this.getObtainedPowerNight())
        console.log("Will total sell for a night:", this.getSellPowerNight(), "for", this.getPriceByLineSellNight())
        console.log("Will total buy for a night:", this.getObtainedPowerNight(), "for", this.getPriceByLineBuyNight())
        console.log("-".repeat(20))
    }
}
class ElectricianLine{
    constructor(price) {
        this.price = price
    }

}

function main() {
    const generators = [
        SolarPanel.generate(1, 4),
        SolarPanel.generate(2, 3),
        ElectricialStation.generate(3, 99),
    ]
    const generators1 = [
        SolarPanel.generate(1, 4)
    ]

    const electricianLine = [
        new ElectricianLine(100, 2),
        new ElectricianLine(50, 5)
    ]

    const building = [
        new Building(1,5, generators, electricianLine[0]),
        new Building(4,10, generators1, electricianLine[1])
    ]

    building.forEach(i => {
        i.print()
    })
}
main()
