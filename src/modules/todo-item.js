class ToDoItem {
    constructor(task, description, dueDate, priority, completed) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    };
};

function toDoForm() {
    const formEle = document.createElement("form");
    createLabeledInput(formEle, "test");

    return formEle;
};

function createLabeledInput(form, label) {
    const labelEle = document.createElement("label");
    labelEle.textContent = label;
    const inputEle = document.createElement("input");

    form.appendChild(labelEle);
    form.appendChild(inputEle);
};

export { ToDoItem, toDoForm };