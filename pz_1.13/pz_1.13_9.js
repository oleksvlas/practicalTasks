class Worker {
    name = ""
    surname = ""
    rate = 0
    days = 0

    getFullName() {
        return `${this.surname} ${this.name}`
    }

    getSalary() {
        return this.rate * this.days
    }
}

let worker = new Worker()

worker.name = "Vitalii"
worker.surname = "Dolhushyn"
worker.rate = 10
worker.days = 80

console.log(`${worker.getFullName()} - ${worker.getSalary()}`)