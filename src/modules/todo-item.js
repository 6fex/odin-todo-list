class ToDoItem {
    constructor(task, description, dueDate, priority, completed) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    };
};

const PRIORITY_ARRAY = ["Low", "Medium", "High"];

function toDoForm() {
    const formEle = document.createElement("form");
    createLabeledInput(formEle, "task", "Task");
    createLabeledInput(formEle, "desc", "Description");
    createLabeledInput(formEle, "d-date", "Due Date", "date");
    createLabeledSelect(formEle, "prio", "Priority", PRIORITY_ARRAY);
    createLabeledInput(formEle, "comp", "Completed", "checkbox");

    return formEle;
};

function createLabeledInput(form, id, label, type = "text") {
    if (type === "checkbox") {
        const labelEle = document.createElement("label");
        labelEle.innerHTML = `${label}<input id="${id}" type="checkbox" name="${id}">`;
        form.appendChild(labelEle);
        return;
    };
    
    const labelEle = document.createElement("label");
    labelEle.textContent = label;
    labelEle.htmlFor = id;
    const inputEle = document.createElement("input");
    inputEle.id = id;
    inputEle.name = id;
    inputEle.type = type;

    form.appendChild(labelEle);
    form.appendChild(inputEle);
};

function createLabeledSelect(form, id, label, options) {
    const labelEle = document.createElement("label");
    labelEle.textContent = label;
    const selectEle = document.createElement("select");
    selectEle.id = id;
    options.forEach(option => {
        const optionEle = document.createElement("option");
        optionEle.textContent = option;
        const optionLowerCase = option.toLowerCase();
        optionEle.setAttribute("value", optionLowerCase);
        selectEle.appendChild(optionEle);
    });

    form.appendChild(labelEle);
    form.appendChild(selectEle);
};

export { ToDoItem, toDoForm };