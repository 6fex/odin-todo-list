import "./styles.css";
import { List, createListDiv } from "./modules/list.js";
import ToDoItem from "./modules/todo-item.js";
import localStorageMethods from "./modules/local-storage-methods.js";

const listsKey = "lists";
localStorageMethods.createArray(listsKey);

const testList = new List("Today");
localStorageMethods.push(listsKey, testList);
console.log(testList);

const testItem = new ToDoItem("mow lawn", "before 5 o'clock", "12-02-2026", "medium", false);
console.log(testItem);

testList.addToDo(testItem);
console.log(testList.getToDos());

testList.removeTodo("mow lawn");
console.log(testList.getToDos());

const listsDiv = document.querySelector(".lists");
listsDiv.appendChild(createListDiv("Today"));

console.log(JSON.parse(localStorage.getItem(listsKey)));
