export default class List {
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
};
