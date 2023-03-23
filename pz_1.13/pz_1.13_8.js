class Task {
    name = ""
    description = ""
    start = new Date()
    end = new Date()
    tasks = []

    static of (name, description, start, end) {
        let task = new Task()

        task.name = name
        task.description = description
        task.start = start
        task.end = end

        return task
    }
}

class CurrentTask extends Task {
    progress = 0
    isDone = false

    static of (name, description, start, end, progress, isDone) {
        let currentTask = new CurrentTask()

        currentTask.name = name
        currentTask.description = description
        currentTask.start = start
        currentTask.end = end
        currentTask.progress = progress
        currentTask.isDone = isDone

        return currentTask
    }
}

let currentTask = CurrentTask.of("main", "description", new Date(), (new Date()).setDate(new Date().getDate() + 2), 85, false)
let taskOne = Task.of("1", "description", new Date(), (new Date()).setDate(new Date().getDate() + 2))
let taskTwo = Task.of("2", "description", new Date(), (new Date()).setDate(new Date().getDate() + 2))

currentTask.tasks = [taskOne, taskTwo]

console.log(currentTask)