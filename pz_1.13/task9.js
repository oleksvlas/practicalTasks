class Worker{
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(){
        return this.rate * this.days
    }
}
let worker = new Worker("Yevgenii", "Sementsov", 1000, 7)
console.log(worker.name, worker.surname, "has salary for", worker.days, "days: ", worker.getSalary())