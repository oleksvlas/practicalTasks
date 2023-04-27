//клас Task з відповідними властивостями, а потім створити підклас ExecutedTask, який буде мати додаткові властивості "відсоток виконання" та "прапор завдання завершена".
class Task {
    constructor(name, description, startDate, endDate) {
      this.name = name;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
      this.subtasks = [];
    }
  
    addSubtask(subtask) {
      this.subtasks.push(subtask);
    }
  
    getSubtasks() {
      return this.subtasks;
    }
  }
  
  class ExecutedTask extends Task {
    constructor(name, description, startDate, endDate, completionPercentage, isCompleted) {
      super(name, description, startDate, endDate);
      this.completionPercentage = completionPercentage;
      this.isCompleted = isCompleted;
    }
  }
  
  const graduationPartyTask = new ExecutedTask(
    "Випускний",
    "Святкування випуску",
    new Date(2021, 5, 26),
    new Date(2021, 5, 27),
    87,
    false
  );
  
  graduationPartyTask.addSubtask("Підготовка залу");
  graduationPartyTask.addSubtask("Закупівля напоїв та їжі");
  graduationPartyTask.addSubtask("Запрошення гостей");
  
  console.log(graduationPartyTask);
  console.log(graduationPartyTask.getSubtasks());
  //В результаті виведення в консолі ми отримаємо об'єкт задачі з відсотком виконання 87% та прапором завдання, яке ще не завершене, а також список дочірніх підзадач.