const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); // === document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
    event.preventDefault()
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    console.log(newToDo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);