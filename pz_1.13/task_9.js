class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
    }
  //getSalary(), який повертає зарплату працівника, розраховану за формулою rate * days
    getSalary() {
      return this.rate * this.days;
    }
  }
  const worker = new Worker("John", "Doe", 20, 25);
console.log(worker.getSalary()); // 500