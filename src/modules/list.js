class List {
    #toDos = [];
    
    constructor(name) {
        this.name = name;
    };

    getToDos() {
        return this.#toDos;
    };

    addToDo(obj) {
        this.#toDos.push(obj);
    };

    removeTodo(task) {
        this.#toDos.forEach((obj, index) => {
            if(obj.task === task) {
                this.#toDos.splice(index, 1);
            };
        });
    };
};

function createListDiv(name) {
    const listDiv = document.createElement("div");
    listDiv.textContent = name;

    return listDiv;
};

export { List, createListDiv };
