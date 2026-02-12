import "./styles.css";
import { createListDiv } from "./modules/list.js";
import ToDoItem from "./modules/todo-item.js";
import localStorageMethods from "./modules/local-storage-methods.js";

if (localStorage.length === 0) {
    localStorageMethods.createArray("Today");
};

const listsDiv = document.querySelector(".lists");
const listAddButton = document.querySelector(".list-add");
const todosDiv = document.querySelector(".todos");
const todoAddButton = document.querySelector(".todo-add");

window.addEventListener("load", (event) => {
    const childrenArray = Array.from(listsDiv.children);
    childrenArray.forEach(child => child.remove());

    const tempObj = Object.keys(localStorage);
    for (const key of tempObj) {
        listsDiv.appendChild(createListDiv(key));
    };
});

listAddButton.addEventListener("click", (event) => {
    const name = prompt("Name of your new list");
    if (!localStorageMethods.hasKey(name)) {
        localStorageMethods.createArray(name);
        listsDiv.appendChild(createListDiv(name));
    } else {
        console.log("List with the same name already exists.");
    };
});

listsDiv.addEventListener("click", (event) => {
    const key = event.target.textContent;
    const array = localStorageMethods.getArray(key);
    console.log(array);
});

todoAddButton.addEventListener("click", (event) => {
    
});

console.log(localStorage);
