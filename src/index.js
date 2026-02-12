import "./styles.css";
import { List, createListDiv } from "./modules/list.js";
import ToDoItem from "./modules/todo-item.js";
import localStorageMethods from "./modules/local-storage-methods.js";

const listStorageKey = "listStorage";
if (localStorage.length === 0) {
    localStorageMethods.createArray(listStorageKey);
};
if (localStorageMethods.getArray(listStorageKey).length === 0) {
    const newList = new List("Today");
    localStorageMethods.push(listStorageKey, newList);
};

const listsDiv = document.querySelector(".lists");
const listAddButton = document.querySelector(".list-add");

window.addEventListener("load", (event) => {
    const listsArray = localStorageMethods.getArray(listStorageKey);

    const childrenArray = Array.from(listsDiv.children);
    childrenArray.forEach(child => child.remove());

    listsArray.forEach(list => {
        listsDiv.appendChild(createListDiv(list.name));
    });
});

listAddButton.addEventListener("click", (event) => {
    const name = prompt("Name of your new list");
    if (localStorageMethods.isUnique(listStorageKey, name)) {
        const newList = new List(name);
        localStorageMethods.push(listStorageKey, newList);
        listsDiv.appendChild(createListDiv(newList.name));
    } else {
        console.log("List with the same name already exists.");
    };
});

console.log(JSON.parse(localStorage.getItem(listStorageKey)));
