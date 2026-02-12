export default class List {
    #toDos = [];
    
    constructor(name) {
        this.name = name;
    };

    getToDos() {
        return this.#toDos;
    };
};
