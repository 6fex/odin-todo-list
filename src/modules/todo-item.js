export default class ToDoItem {
    constructor(task, description, dueDate, priority, completed) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    };
}