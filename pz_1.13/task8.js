class Task{
    constructor(topic, description, start_date, end_date) {
        this.topic = topic
        this.description = description
        this. start_date = start_date
        this.end_date = end_date
    }
    print(){
        console.log("Ваша задача: ", this.topic, "\nОпис задачі: ", this.description, "\nПочаток: ", this.start_date, "\nКінець: ", this.end_date)
    }
}
class Progress_task extends Task{
    constructor(topic,description, start_date, end_date, persentage, status) {
        super(topic, description, start_date, end_date);
        this.persentage = persentage
        this.status = status
    }
    print(){
        super.print()
        console.log("Відсоток виконання: ", this.persentage, "%\n", this.status)
    }
}
let progress_task = new Progress_task("Випускний", "Святкування випускного", "26.06.2021р.", "27.06.2021р.", 87, "Завдання в процесі.")
progress_task.print()