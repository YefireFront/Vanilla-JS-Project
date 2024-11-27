//*SELECTOR

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");
//*EVENT LISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//*FUNCTION

function addTodo(event) {
  event.preventDefault();

  //*Creating DIV todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //*Creating Li todo
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);

  //*Checked button
  const CheckedButtond = document.createElement("button");
  CheckedButtond.innerHTML = '<i class="fas fa-check"></i>';
  CheckedButtond.classList.add("Checked-btn");
  todoDiv.appendChild(CheckedButtond);

  //*Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("complete-btn");
  todoDiv.appendChild(deleteButton);

  //*APPEND
  todoList.append(todoDiv);

  todoInput.value = "";
}
function deleteCheck(e) {
  let item = e.target;
  if (item.classList[1] === "fa-trash") {
    console.log("Deleting...");
    item.parentElement.parentElement.remove();
  }
  if (item.classList[1] === "fa-check") {
    console.log("Checked");
    item.parentElement.parentElement.classList.toggle("checked");
  }
}

