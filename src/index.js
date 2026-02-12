import "./styles.css";
import { List } from "./modules/list.js";
import ToDoItem from "./modules/todo-item.js";

const listsDiv = document.querySelector(".lists");

const testList = new List("Today");
console.log(testList);

const testItem = new ToDoItem("mow lawn", "before 5 o'clock", "12-02-2026", "medium", false);
console.log(testItem);

testList.addToDo(testItem);
console.log(testList.getToDos());

testList.removeTodo("mow lawn");
console.log(testList.getToDos());
